<template>
    <UApp>
        <Analytics />
        <NuxtPage />
    </UApp>
</template>

<script setup lang="ts">
import { Analytics } from "@vercel/analytics/nuxt";
const config = useRuntimeConfig();

useHead({
  htmlAttrs: { lang: "pt-BR" },
  meta: [{ name: "author", content: "Guilherme Augusto" }],
});

const title = "Guilherme Augusto — Front-end Developer";
const description =
    "Portfólio com projetos em Nuxt/Vue, TypeScript e foco em performance, UI e DX.";

const siteUrl = String(config.public.siteUrl ?? "");

useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogType: "website",
    ogUrl: siteUrl || undefined,
    ogImage: siteUrl ? `${siteUrl}/og.png` : "/og.png",
    twitterCard: "summary_large_image",
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: siteUrl ? `${siteUrl}/og.png` : "/og.png",
});
</script>

<style>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "JetBrains Mono", monospace;
}

html {
    scroll-behavior: smooth;
}

body {
    overflow-x: hidden;
    margin: 0;
    padding: 0;
    width: 100%;
}

::-webkit-scrollbar {
    width: 12px;
}

::-webkit-scrollbar-thumb {
    background-color: #ffd500;
    border: 2px solid #111;
}

::-webkit-scrollbar-thumb:hover {
    background-color: #eab308;
}
</style>
