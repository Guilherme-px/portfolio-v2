// https://nuxt.com/docs/api/configuration/nuxt-config
const rawSiteUrl =
    process.env.NUXT_PUBLIC_SITE_URL ??
    "https://guilherme-augusto-portfolio.vercel.app";
const siteUrl = rawSiteUrl.replace(/\/$/, "");
const githubUrl =
    process.env.NUXT_PUBLIC_GITHUB ?? "https://github.com/Guilherme-px";
const linkedinUsername =
    process.env.NUXT_PUBLIC_LINKEDIN_USERNAME ?? "guilherme-augusto-da-silva";

export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    devtools: { enabled: false },
    modules: [
        "@nuxt/ui",
        "@nuxt/fonts",
        "@nuxt/icon",
        "@nuxt/image",
        "@nuxtjs/seo",
    ],
    css: ["~/assets/css/main.css", "devicon/devicon.min.css"],
    ssr: true,
    fonts: {
        families: [
            {
                name: "JetBrains Mono",
                weights: ["400", "700"],
            },
        ],
    },
    icon: {
        collections: ["uil", "lucide"],
    },
    runtimeConfig: {
        public: {
            linkedinUsername,
            whatsappPhone: process.env.NUXT_PUBLIC_WHATSAPP_PHONE ?? "",
            email: process.env.NUXT_PUBLIC_EMAIL ?? "",
            emailSubject: process.env.NUXT_PUBLIC_EMAIL_SUBJECT ?? "",
            emailBody: process.env.NUXT_PUBLIC_EMAIL_BODY ?? "",
            github: githubUrl,
            siteUrl,
        },
    },

    site: {
        siteUrl: siteUrl || "https://guilherme-augusto-portfolio.vercel.app",
        name: "Guilherme Augusto — Fullstack Developer",
        description:
            "Portfólio com projetos pessoais, skills e formas de contato. Vue/Nuxt, TypeScript e UI moderna.",
        defaultLocale: "pt-BR",
    },

    schemaOrg: {
        identity: {
            type: "Person",
            name: "Guilherme Augusto da Silva Gonçalves",
            siteUrl:
                siteUrl || "https://guilherme-augusto-portfolio.vercel.app",
            image: "/logo.png",
            sameAs: [
                `https://www.linkedin.com/in/${linkedinUsername}`,
                githubUrl,
            ],
        },
    },
});
