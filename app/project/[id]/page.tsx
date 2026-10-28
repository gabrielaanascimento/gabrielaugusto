'use client';

import { useEffect, useState, use } from 'react';
import Link from 'next/link';
import { Particles } from "@/components/ui/particles";
import { getProjectDetailsService, ProjectDetails } from '@/services/projectService';
import { useHighlightedCode } from "@/hooks/use-highlighted-code";
import { FileCodeIcon, WrapTextIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    CodeBlock,
    CodeBlockActions,
    CodeBlockContent,
    CodeBlockCopyButton,
    CodeBlockHeader,
    CodeBlockLine,
    CodeBlockTitle,
} from "@/components/ui/code-block";

interface GitTreeItem {
    path: string;
    mode: string;
    type: 'blob' | 'tree';
    sha: string;
    size?: number;
    url: string;
}

export default function ProjectExplorerPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params);
    const projectId = resolvedParams.id;

    const [project, setProject] = useState<ProjectDetails | null>(null);
    const [loadingProject, setLoadingProject] = useState<boolean>(true);

    // Estados do Explorer
    const [branch, setBranch] = useState<string>('main');
    const [branches, setBranches] = useState<{ name: string }[]>([]);
    const [tree, setTree] = useState<GitTreeItem[]>([]);
    const [loadingTree, setLoadingTree] = useState<boolean>(false);

    const [selectedFile, setSelectedFile] = useState<{ path: string; content: string; size?: number; htmlUrl?: string } | null>(null);
    const [loadingFile, setLoadingFile] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [token, setToken] = useState<string>('');
    const [isTokenModalOpen, setIsTokenModalOpen] = useState<boolean>(false);
    const [toastMessage, setToastMessage] = useState<{ text: string; type: 'success' | 'error' | 'info' } | null>(null);

    // Estado de wrap para o CodeBlock
    const [wrap, setWrap] = useState<boolean>(false);

    // Hook do Shiki para destacar a sintaxe do arquivo selecionado
    const highlightedLines = useHighlightedCode(selectedFile?.content || '', "ts");

    useEffect(() => {
        const savedToken = localStorage.getItem('gh_token');
        if (savedToken) setToken(savedToken);
    }, []);

    const showToast = (text: string, type: 'success' | 'error' | 'info' = 'info') => {
        setToastMessage({ text, type });
        setTimeout(() => setToastMessage(null), 3500);
    };

    useEffect(() => {
        async function fetchProject() {
            try {
                setLoadingProject(true);
                const data = await getProjectDetailsService(projectId);
                if (!data) {
                    setError('Projeto não encontrado no banco de dados.');
                    return;
                }
                setProject(data);
            } catch (err) {
                setError('Erro ao carregar dados do projeto.');
            } finally {
                setLoadingProject(false);
            }
        }
        fetchProject();
    }, [projectId]);

    const fetchGitHubApi = async (endpoint: string) => {
        const headers: HeadersInit = {
            'Accept': 'application/vnd.github+json',
        };
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        const response = await fetch(`https://api.github.com${endpoint}`, { headers });
        if (!response.ok) {
            if (response.status === 404) throw new Error('Repositório ou arquivo não encontrado (404).');
            if (response.status === 403) throw new Error('Limite de requisições excedido. Configure um Personal Access Token.');
            if (response.status === 401) throw new Error('Token de acesso inválido ou expirado.');
            throw new Error(`Erro na API: ${response.statusText} (${response.status})`);
        }
        return await response.json();
    };

    useEffect(() => {
        if (!project) return;

        const owner = project.owner;
        const repo = project.repo;

        async function initRepoData() {
            setLoadingTree(true);
            setError(null);
            try {
                const repoData = await fetchGitHubApi(`/repos/${owner}/${repo}`);
                const defaultBranch = repoData.default_branch || 'main';
                setBranch(defaultBranch);

                try {
                    const branchList = await fetchGitHubApi(`/repos/${owner}/${repo}/branches`);
                    setBranches(branchList);
                } catch {
                    setBranches([{ name: defaultBranch }]);
                }

                await loadTree(defaultBranch, owner, repo);
                showToast(`Repositório ${owner}/${repo} carregado!`, 'success');
            } catch (err: any) {
                setError(err.message || 'Erro ao carregar o repositório do GitHub.');
            } finally {
                setLoadingTree(false);
            }
        }

        initRepoData();
    }, [project, token]);

    const loadTree = async (targetBranch: string, ownerOverride?: string, repoOverride?: string) => {
        const currentOwner = ownerOverride || project?.owner;
        const currentRepo = repoOverride || project?.repo;
        if (!currentOwner || !currentRepo) return;

        setLoadingTree(true);
        try {
            const data = await fetchGitHubApi(`/repos/${currentOwner}/${currentRepo}/git/trees/${targetBranch}?recursive=1`);
            setTree(data.tree || []);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoadingTree(false);
        }
    };

    const handleBranchChange = async (newBranch: string) => {
        setBranch(newBranch);
        await loadTree(newBranch);
        showToast(`Branch alterada para ${newBranch}`, 'info');
    };

    const loadFileContent = async (path: string) => {
        if (!project) return;
        setLoadingFile(true);
        try {
            const data = await fetchGitHubApi(`/repos/${project.owner}/${project.repo}/contents/${path}?ref=${branch}`);

            let content = '';
            if (data.encoding === 'base64') {
                const binString = atob(data.content);
                const bytes = Uint8Array.from(binString, (m) => m.codePointAt(0)!);
                content = new TextDecoder().decode(bytes);
            } else if (data.content) {
                content = data.content;
            } else {
                content = 'Conteúdo não disponível.';
            }

            setSelectedFile({
                path,
                content,
                size: data.size,
                htmlUrl: data.html_url
            });
        } catch (err: any) {
            showToast(`Erro ao carregar arquivo: ${err.message}`, 'error');
        } finally {
            setLoadingFile(false);
        }
    };

    const formatBytes = (bytes?: number) => {
        if (!bytes || bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    const sortedTree = [...tree].sort((a, b) => {
        if (a.type === 'tree' && b.type !== 'tree') return -1;
        if (a.type !== 'tree' && b.type === 'tree') return 1;
        return a.path.localeCompare(b.path);
    });

    if (loadingProject) {
        return (
            <div className="relative min-h-screen bg-[#eaeaea] text-gray-900 flex items-center justify-center font-sans">
                <div className="flex items-center space-x-3 bg-white/85 backdrop-blur-md px-6 py-4 rounded-2xl border border-gray-200 shadow-sm">
                    <i className="fa-solid fa-spinner fa-spin text-xl text-black"></i>
                    <span className="text-sm font-medium">Carregando informações do projeto...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="relative min-h-screen bg-[#eaeaea] text-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto space-y-8 relative z-10">

                {/* Cabeçalho */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white/85 backdrop-blur-md rounded-2xl border border-gray-200 p-6 shadow-sm">
                    <div>
                        <Link href="/projects" className="text-xs uppercase tracking-wider text-gray-500 hover:text-black transition-colors mb-2 inline-block font-medium">
                            ← Voltar aos Projetos
                        </Link>
                        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 flex items-center gap-3 flex-wrap">
                            {project?.title || `Projeto: ${projectId}`}
                            <span className="text-xs px-3 py-1 bg-black text-white rounded-full font-medium">
                                {project?.owner}/{project?.repo}
                            </span>
                        </h1>
                        <p className="text-gray-600 text-sm mt-1 max-w-2xl">
                            {project?.desc || 'Repositório de código integrado via API do GitHub.'}
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                        {project?.projectUrl && (
                            <a
                                href={project.projectUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center space-x-2 bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-xl text-xs font-semibold transition shadow-sm"
                            >
                                <i className="fa-solid fa-globe"></i>
                                <span>Acessar Site</span>
                            </a>
                        )}

                        {project?.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-300 px-4 py-2 rounded-xl text-xs font-semibold transition shadow-sm"
                            >
                                <i className="fa-brands fa-github text-base"></i>
                                <span>Repositório</span>
                            </a>
                        )}

                        <select
                            value={branch}
                            onChange={(e) => handleBranchChange(e.target.value)}
                            className="bg-gray-100 border border-gray-300 rounded-xl px-3 py-2 text-xs text-gray-800 font-medium focus:outline-none focus:border-black"
                        >
                            {branches.map((b) => (
                                <option key={b.name} value={b.name}>{b.name}</option>
                            ))}
                        </select>

                        <button
                            onClick={() => setIsTokenModalOpen(true)}
                            className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-300 px-3.5 py-2 rounded-xl text-xs font-medium transition shadow-sm"
                        >
                            <i className="fa-solid fa-key text-yellow-600"></i>
                            <span className="hidden md:inline">Token</span>
                            <span className={`w-2 h-2 rounded-full ${token ? 'bg-green-500' : 'bg-gray-400'}`}></span>
                        </button>
                    </div>
                </div>

                {/* Grid: File Tree & CodeBlock */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                    {/* File Tree Component */}
                    <div className="lg:col-span-5 bg-white/85 backdrop-blur-md rounded-2xl border border-gray-200 p-5 shadow-sm flex flex-col h-[560px]">
                        <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-3">
                            <span className="text-sm font-semibold text-gray-800 flex items-center gap-2">
                                📁 Árvore de Diretórios
                            </span>
                            <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-lg font-mono">
                                {tree.length} itens
                            </span>
                        </div>

                        <div className="flex-1 overflow-y-auto space-y-1 pr-1">
                            {loadingTree ? (
                                <div className="flex flex-col items-center justify-center h-full text-xs text-gray-400 space-y-2">
                                    <i className="fa-solid fa-spinner fa-spin text-lg"></i>
                                    <span>Buscando estrutura...</span>
                                </div>
                            ) : error ? (
                                <div className="p-3 text-xs text-red-600 bg-red-50 rounded-xl border border-red-200">
                                    {error}
                                </div>
                            ) : tree.length === 0 ? (
                                <div className="text-center text-xs text-gray-400 py-10">Nenhum arquivo encontrado</div>
                            ) : (
                                sortedTree.map((item) => {
                                    const depth = item.path.split('/').length - 1;
                                    const name = item.path.split('/').pop();
                                    const isDir = item.type === 'tree';

                                    return (
                                        <div
                                            key={`${item.sha}-${item.path}`}
                                            onClick={() => !isDir && loadFileContent(item.path)}
                                            style={{ paddingLeft: `${Math.max(8, depth * 14 + 8)}px` }}
                                            className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-mono cursor-pointer transition-all ${isDir
                                                ? 'text-gray-800 font-semibold hover:bg-gray-100'
                                                : 'text-gray-600 hover:bg-black/5 hover:text-black'
                                                }`}
                                        >
                                            <div className="flex items-center truncate mr-2">
                                                <span className="mr-2">{isDir ? '📂' : '📄'}</span>
                                                <span className="truncate">{name}</span>
                                            </div>
                                            <span className="text-[10px] text-gray-400 font-mono">
                                                {isDir ? 'pasta' : formatBytes(item.size)}
                                            </span>
                                        </div>
                                    );
                                })
                            )}
                        </div>
                    </div>

                    {/* CodeBlock Component idêntico à referência */}
                    <div className="lg:col-span-7 flex flex-col h-[560px]">
                        <CodeBlock className="h-full flex flex-col rounded-2xl overflow-hidden shadow-xl border border-gray-800 bg-[#0d1117] text-gray-200">
                            <CodeBlockHeader className="bg-[#161b22] border-b border-gray-800 px-4 py-3 flex items-center justify-between">
                                <CodeBlockTitle className="text-xs font-mono text-gray-300 flex items-center gap-2">
                                    <i className="fa-solid fa-file-code text-blue-400"></i>
                                    <span>{selectedFile ? selectedFile.path : 'Nenhum arquivo selecionado'}</span>
                                </CodeBlockTitle>
                                <CodeBlockActions className="flex items-center gap-2">
                                    {selectedFile && (
                                        <>
                                            <CodeBlockCopyButton value={selectedFile.content} />
                                            <a
                                                href={selectedFile.htmlUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="px-2.5 py-1 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded text-xs font-medium transition flex items-center gap-1"
                                            >
                                                <span>GitHub ↗</span>
                                            </a>
                                        </>
                                    )}
                                </CodeBlockActions>
                            </CodeBlockHeader>

                            <div className="flex-1 overflow-auto relative bg-[#0d1117] p-4">
                                {!selectedFile ? (
                                    <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500 p-6 text-center space-y-2">
                                        <span className="text-2xl">💻</span>
                                        <p className="text-xs">Selecione um arquivo na árvore à esquerda para visualizar o código fonte.</p>
                                    </div>
                                ) : loadingFile ? (
                                    <div className="absolute inset-0 bg-[#0d1117]/80 backdrop-blur-sm z-20 flex items-center justify-center text-gray-400 text-xs">
                                        Carregando código...
                                    </div>
                                ) : (
                                    <CodeBlockContent lineNumbers className="font-mono text-xs leading-relaxed text-gray-300">
                                        {selectedFile.content.split('\n').map((line, index) => (
                                            <CodeBlockLine key={index}>{line}</CodeBlockLine>
                                        ))}
                                    </CodeBlockContent>
                                )}
                            </div>
                        </CodeBlock>
                    </div>

                </div>

                {/* Nuvem de Tecnologias */}
                {project?.techs && project.techs.length > 0 && (
                    <div className="bg-white/85 backdrop-blur-md rounded-2xl border border-gray-200 p-6 shadow-sm">
                        <h3 className="text-sm font-semibold text-gray-800 mb-4">Tecnologias Utilizadas no Projeto</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.techs.map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-3.5 py-1.5 bg-gray-100 hover:bg-black hover:text-white text-gray-800 text-xs font-medium rounded-full transition-all duration-200 border border-gray-200"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

            </div>

            {/* Modal de Token Personalizado */}
            {isTokenModalOpen && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 space-y-4 border border-gray-200">
                        <div className="flex items-center justify-between">
                            <h3 className="font-semibold text-gray-900 text-sm flex items-center space-x-2">
                                <i className="fa-solid fa-key text-yellow-600"></i>
                                <span>GitHub Personal Access Token</span>
                            </h3>
                            <button onClick={() => setIsTokenModalOpen(false)} className="text-gray-400 hover:text-black">
                                <i className="fa-solid fa-xmark text-lg"></i>
                            </button>
                        </div>
                        <p className="text-xs text-gray-600 leading-relaxed">
                            Adicionar um token evita limites estritos da API pública e permite aceder a repositórios <strong className="text-black">privados</strong>.
                        </p>
                        <input
                            type="password"
                            value={token}
                            onChange={(e) => setToken(e.target.value)}
                            placeholder="ghp_xxxxxxxxxxxxxxxxxxxx"
                            className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-xl text-xs text-gray-900 focus:outline-none focus:border-black font-mono"
                        />
                        <div className="flex justify-end space-x-2 pt-2">
                            <button
                                onClick={() => { setToken(''); localStorage.removeItem('gh_token'); setIsTokenModalOpen(false); showToast('Token removido.', 'info'); }}
                                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-xl text-xs transition font-medium"
                            >
                                Remover
                            </button>
                            <button
                                onClick={() => { localStorage.setItem('gh_token', token); setIsTokenModalOpen(false); showToast('Token salvo com sucesso!', 'success'); }}
                                className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-xl text-xs font-semibold transition"
                            >
                                Salvar Token
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Toast Flutuante */}
            {toastMessage && (
                <div className="fixed bottom-5 right-5 z-50 flex items-center space-x-2 px-4 py-3 rounded-xl border shadow-xl text-xs font-medium bg-white border-gray-200 text-gray-900 animate-fade-in">
                    <i className={`fa-solid ${toastMessage.type === 'success' ? 'fa-circle-check text-green-600' : toastMessage.type === 'error' ? 'fa-triangle-exclamation text-red-600' : 'fa-circle-info text-blue-600'}`}></i>
                    <span>{toastMessage.text}</span>
                </div>
            )}

            <Particles
                className="fixed inset-0 z-0 pointer-events-none"
                quantity={150}
                ease={80}
                color={"#000000"}
                refresh
            />
        </div>
    );
}