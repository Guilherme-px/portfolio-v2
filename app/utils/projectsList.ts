import schedifyLandingImg from "/assets/imgs/schedifyLandingPage.png";
import coffeePageImg from "/assets/imgs/coffeePage.png";
import textConvertImg from "/assets/imgs/projectTextConvert.png";
import burgPageImg from "/assets/imgs/burguerMenu.png";
import schedifyB2b from "/assets/imgs/schedifyB2B.png";
import schedifyB2c from "/assets/imgs/schedifyB2C.png";

export type ProjectGallery = {
    title: string;
    description: string;
    image?: string;
    youtubeId?: string;
    demo?: string;
    github?: string;
    tags: string[];
    mermaidCode?: string;
    swaggerUrl?: string;
};

export type Project = {
    title: string;
    description: string;
    details?: string;
    image: string;
    tags: string[];
    color: "yellow" | "red" | "blue" | "green";
    github?: string;
    demo?: string;
    youtubeId?: string;
    gallery?: ProjectGallery[];
};

export const projects: Project[] = [
    {
        title: "SCHEDIFY",
        description:
            "Plataforma SaaS multi-tenant para gestão de estabelecimentos de estética.",
        image: schedifyLandingImg,
        tags: [
            "NODE",
            "MONGODB",
            "STRIPE",
            "TYPESCRIPT",
            "NEXT",
            "REACT",
            "NUXT",
            "SERVERLESS",
            "AWS",
        ],
        color: "yellow",
        gallery: [
            {
                title: "Arquitetura do Sistema",
                description:
                    "O Schedify é dividido em 4 pilares. A landing page capta e cobra via Stripe. A API gerencia o banco de dados isolado (multi-tenant). O Admin gerencia e o Marketplace permite o agendamento pelo cliente final.",
                image: schedifyLandingImg,
                mermaidCode: `graph TD
                    subgraph Frontends
                        LP[Landing Page Next.js]
                        AD[Painel Admin Vue.js]
                        MK[Marketplace Nuxt.js]
                    end
                            
                    subgraph Servicos Externos
                        ST[Stripe API\nConnect]
                        GM[Google Places API]
                    end
                            
                    subgraph "AWS Cloud"
                        APIGateway[API Gateway]
                            
                        subgraph "Lambda Functions - Node/Express"
                            MW[Middlewares\nHelmet, RateLimit, JWT]
                            CTRL[Controllers / Celebrate]
                            SRV[Services / Domain]
                            REPO[Repositories / Prisma]
                        end
                            
                        S3[(AWS S3\nUploads)]
                        SES[(AWS SES\nEmails)]
                    end
                            
                    subgraph Database
                        DB[(MongoDB\nMulti-tenant)]
                    end
                            
                    LP -- Assinatura SaaS --> ST
                    ST -- Webhooks --> APIGateway
                    LP -- Cria Conta --> APIGateway
                    AD -- JWT Auth --> APIGateway
                    MK -- Agendamento / Checkout --> APIGateway
                            
                    APIGateway --> MW
                    MW --> CTRL
                    CTRL --> SRV
                    SRV --> REPO
                    REPO --> DB
                            
                    CTRL -- Upload de Imagem --> S3
                    SRV -- Recuperar Senha --> SES
                    SRV -- Geocode no Cadastro --> GM
                    SRV -- Split de Pagamento --> ST`,
                tags: [
                    "ARQUITETURA",
                    "MULTI-TENANT",
                    "JWT",
                    "WEBHOOKS",
                    "STRIPE CONNECT",
                ],
            },
            {
                title: "API & Documentação",
                description:
                    "Core do sistema construído com Clean Architecture e DDD. API REST Serverless (AWS Lambda via Express) responsável por gerenciar o banco MongoDB (Prisma ORM) multi-tenant. Conta com middlewares de segurança (Helmet, Rate Limiting), validações (Celebrate), upload de imagens (S3), envio de e-mails (SES), integração Google Maps e webhooks de pagamento do Stripe. Cobertura de testes unitários e de integração com Jest.",
                swaggerUrl: "/swagger.json",
                tags: [
                    "NODE",
                    "MONGODB",
                    "PRISMA",
                    "AWS LAMBDA",
                    "AWS S3",
                    "AWS SES",
                    "CLEAN ARCH",
                    "DDD",
                    "JEST",
                    "HELMET",
                    "SWAGGER",
                    "STRIPE CONNECT",
                ],
            },
            {
                title: "Landing Page",
                description:
                    "Landing page focada em conversão, com seções de benefícios, planos e CTA. Integração de pagamento com Stripe e validações de formulário. Layout responsivo, otimizado para performance e SEO para melhor indexação.",
                image: schedifyLandingImg,
                youtubeId: "https://www.youtube.com/watch?v=XmQWo_4kMJI",
                tags: ["NEXT", "NODEMAILER", "ZUSTAND", "ZOD", "REACT HOOK FORM"],
            },
            {
                title: "Painel Administrativo",
                description:
                    "Projeto B2B para gestão de agendamentos de serviços no ramo de estetica com cadastro de funcionarios, grupos de permissões, controle de caixa, comandas de serviços e gestão financeira, funcionalidades baseadas no tier do plano de assinatura via stripe.",
                image: schedifyB2b,
                youtubeId: "https://www.youtube.com/watch?v=Xf1h8FSNoP4",
                tags: [
                    "VUE 3",
                    "PINIA",
                    "VITEST",
                    "CYPRESS",
                    "QUASAR",
                    "STRIPE",
                    "AXIOS",
                    "FULLCALENDAR",
                    "APEXCHARTS",
                ],
            },
            {
                title: "Marketplace",
                description:
                    "Projeto B2C para que usuários possam agendar serviços com empresas próximas à sua localização, favoritar seus lugares preferidos, escolher dia e horário para agendamento e optar por realizar o pagamento de forma online ou presencial, conforme definido pelas empresas que utilizam o serviço.",
                image: schedifyB2c,
                // youtubeId: "https://www.youtube.com/watch?v=XmQWo_4kMJI",
                tags: [
                    "NUXT",
                    "PINIA",
                    "VITEST",
                    "CYPRESS",
                    "QUASAR",
                    "STRIPE",
                    "AXIOS",
                    "NUXT UI",
                    "GOOGLE OAUTH",
                    "BIOME",
                    "GOOGLE PLACES",
                ],
            },
        ],
    },
    {
        title: "CONVERSOR DE TEXTO",
        description:
            "Conversor de texto para transformar conteúdos em diferentes formatos e facilitar tarefas do dia a dia.",
        details:
            "Ferramenta para converter e padronizar textos (cases, slug, limpeza e formatação). UI simples e rápida, com ações de copiar e feedback visual. Cobertura com testes unitários, e2e e pipeline de CI/CD.",
        image: textConvertImg,
        tags: ["VUE", "VITEST", "TAILWINDCSS", "CYPRESS", "CI/CD"],
        color: "green",
        github: "https://github.com/Guilherme-px/vue-text-convert",
        demo: "https://vue-text-convert.vercel.app/",
    },
    {
        title: "LANDING PAGE",
        description:
            "Projeto em Vue.js 2, criado no início dos meus estudos com Vue. É uma landing page simples para divulgar uma cafeteria e seus produtos.",
        details:
            "Landing page em Vue 2 para divulgação de cafeteria, com seções de destaque e apresentação de produtos. Projeto feito para praticar estruturação de layout e componentização.",
        image: coffeePageImg,
        tags: ["VUE", "VUETIFY", "SASS"],
        color: "yellow",
        github: "https://github.com/Guilherme-px/Landing-page-vue-vuetify",
        demo: "https://guilherme-px.github.io/coffee-page/",
    },
    {
        title: "LANDING PAGE",
        description:
            "Projeto pessoal desenvolvido para praticar Vue.js 3. Trata-se de uma landing page para divulgação de uma hamburgueria, com seção de localização e cardápio com preços.",
        details:
            "Landing page em Vue 3 com foco em layout, responsividade e organização de seções. Inclui cardápio com preços e informações de localização.",
        image: burgPageImg,
        tags: ["VUE", "CSS"],
        color: "red",
        github: "https://github.com/Guilherme-px/burguer-page",
        demo: "https://guilherme-px.github.io/burg/",
    },
];
