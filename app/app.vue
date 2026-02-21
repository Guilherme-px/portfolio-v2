<template>
    <UApp>
        <NuxtPage />
        <ClientOnly>
            <Analytics mode="production" />
        </ClientOnly>
    </UApp>
</template>

<script setup lang="ts">
import { Analytics } from "@vercel/analytics/nuxt";
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
