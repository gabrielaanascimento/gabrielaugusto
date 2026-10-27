export interface ProjectItem {
    title: string;
    description: string;
    tag: string;
}

export interface AreaDetail {
    slug: string;
    title: string;
    badge: string;
    description: string;
    technologies: string[];
    projects: ProjectItem[];
}

export const AREAS_DATA: Record<string, AreaDetail> = {
    "engenharia-mecanica": {
        slug: "engenharia-mecanica",
        title: "Engenharia Mecânica",
        badge: "Precisão & Indústria",
        description: "Modelagem CAD 3D avançada, simulações de elementos finitos (FEA), análise de fluidos (CFD) e otimização de processos de manufatura e CNC.",
        technologies: ["SolidWorks", "ANSYS", "AutoCAD", "CNC", "Matlab", "Python", "GD&T", "Análise Preditiva"],
        projects: [
            { title: "Otimização Estrutural Chassi", description: "Análise FEA de rigores torcionais para protótipo veicular.", tag: "FEA / CAD" },
            { title: "Simulação Aerodinâmica CFD", description: "Estudo de escoamento e arrasto em carenagens.", tag: "CFD" },
            { title: "Usinagem CNC Avançada", description: "Programação de percursos de ferramenta e prototipagem.", tag: "Manufatura" },
            { title: "Projeto Mecânico Componente", description: "Modelagem parametrizada 3D e detalhamento técnico.", tag: "SolidWorks" },
            { title: "Análise Preditiva de Falhas", description: "Monitoramento de vibrações e desgaste mecânico.", tag: "Confiabilidade" },
            { title: "Dispositivo de Montagem", description: "Desenvolvimento de jig industrial ergonômico.", tag: "Projetos" },
        ]
    },
    "desenvolvimento-software": {
        slug: "desenvolvimento-software",
        title: "Desenvolvimento de Software",
        badge: "Full-Stack & Arquitetura",
        description: "Criação de aplicações web e mobile performáticas, escaláveis e com foco em experiência de usuário de ponta a ponta.",
        technologies: ["React", "Next.js", "TypeScript", "Node.js", "Express", "PostgreSQL", "PHP", "Python", "TailwindCSS", "Git"],
        projects: [
            { title: "Portfólio Profissional", description: "Aplicação Next.js de alta performance com design minimalista.", tag: "React / Next" },
            { title: "Dashboard de Telemetria", description: "Painel em tempo real para monitoramento de dados via API.", tag: "TypeScript" },
            { title: "Sistema de Gestão Web", description: "Plataforma full-stack para controle de processos e estoque.", tag: "Node.js / SQL" },
            { title: "Aplicativo Mobile Companion", description: "App híbrido para consulta rápida de dados de campo.", tag: "React Native" },
            { title: "API Restful Integrada", description: "Serviço backend seguro e modularizado para dados industriais.", tag: "Express" },
            { title: "Landing Page Otimizada", description: "Foco em conversão, SEO técnico e animações fluidas.", tag: "UI/UX" },
        ]
    },
    "iot-sistemas-embarcados": {
        slug: "iot-sistemas-embarcados",
        title: "Sistemas Embarcados & IoT",
        badge: "A Ponte Físico-Digital",
        description: "Desenvolvimento defirmware, integração de sensores, aquisição de dados e telemetria aplicada para ambientes industriais e acadêmicos.",
        technologies: ["ESP32", "Raspberry Pi", "C/C++", "Python", "MQTT", "Sensores", "Telemetria", "Eletrônica Básica"],
        projects: [
            { title: "Central de Telemetria Veicular", description: "Aquisição de dados remotos via ESP32 em tempo real.", tag: "ESP32" },
            { title: "Monitoramento de Motores", description: "Leitura de temperatura e vibração para análise preditiva.", tag: "IoT Industrial" },
            { title: "Aq. de Dados Aerodesign", description: "Sistema embarcado compacto para testes em voo.", tag: "Telemetria" },
            { title: "Automação de Bancada de Testes", description: "Sensores acoplados para automação de ensaios mecânicos.", tag: "Sensores" },
            { title: "Gateway MQTT Local", description: "Servidor leve para coleta de dados de múltiplos nós de rede.", tag: "Protocolos" },
            { title: "Firmware de Baixo Consumo", description: "Otimização energética para dispositivos alimentados por bateria.", tag: "C / C++" },
        ]
    }
};