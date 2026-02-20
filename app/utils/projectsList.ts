import schedifyLandingImg from "/assets/imgs/schedifyLandingPage.png";
import coffeePageImg from "/assets/imgs/coffeePage.png";
import textConvertImg from "/assets/imgs/projectTextConvert.png";
import burgPageImg from "/assets/imgs/burguerMenu.png";

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
};

export const projects: Project[] = [
    {
        title: "LANDING PAGE",
        description:
            "Landing page para apresentar o produto Schedify e permitir a assinatura de um plano.",
        details:
            "Landing page focada em conversão, com seções de benefícios, planos e CTA. Integração de pagamento com Stripe e validações de formulário. Layout responsivo, otimizado para performance e SEO para melhor indexação.",
        image: schedifyLandingImg,
        tags: ["NEXT", "STRIPE", "ZUSTAND", "ZOD", "REACT HOOK FORM"],
        color: "yellow",
        // youtubeId: "https://youtu.be/hZUWwN35TLY",
    },
    {
        title: "CONVERSOR DE TEXTO",
        description:
            "Conversor de texto para transformar conteúdos em diferentes formatos e facilitar tarefas do dia a dia.",
        details:
            "Ferramenta para converter e padronizar textos (cases, slug, limpeza e formatação). UI simples e rápida, com ações de copiar e feedback visual. Cobertura com testes unitários, e2e e pipeline de CI/CD.",
        image: textConvertImg,
        tags: ["VUE", "VITEST", "TAILWINDCSS", "CYPRESS", "CI/CD"],
        color: "red",
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
        color: "blue",
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
        color: "green",
        github: "https://github.com/Guilherme-px/burguer-page",
        demo: "https://guilherme-px.github.io/burg/",
    },
];
