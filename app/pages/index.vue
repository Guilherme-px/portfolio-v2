<template>
    <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
    </main>
    <Footer />
</template>

<script setup lang="ts">
import About from "~/components/About.vue";
import Hero from "~/components/Hero.vue";
import Skills from "~/components/Skills.vue";
import Footer from "~/components/Footer.vue";
import Projects from "~/components/Projects.vue";
</script>
