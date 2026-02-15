<template>
    <section id="skills" class="skills" ref="sectionRef">
        <div class="skills__container">
            <div class="skills__title">
                <h2>
                    <span class="white">MINHAS</span>
                    <span class="gradient"> SKILLS</span>
                </h2>
                <div class="underline"></div>
            </div>

            <div class="skills__grid">
                <div
                    v-for="skill in skills"
                    :key="skill.name"
                    class="card-wrapper"
                >
                    <div class="shadow-card"></div>

                    <UCard
                        :ui="{
                            root: 'skill-card !rounded-none !shadow-none',
                            body: 'p-0',
                        }"
                        :class="skill.color"
                    >
                        <div class="card-content">
                            <Icon :name="skill.icon" size="40px" />
                            <strong>{{ skill.name }}</strong>
                        </div>
                    </UCard>
                    <div class="tape"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const sectionRef = ref<HTMLElement | null>(null);

const skills = [
    { name: "JAVASCRIPT", icon: "i-lucide:code", color: "yellow" },
    { name: "TYPESCRIPT", icon: "i-lucide:braces", color: "red" },
    { name: "REACT", icon: "i-lucide:component", color: "blue" },
    { name: "VUE.JS", icon: "i-lucide:box", color: "green" },
    { name: "NODE.JS", icon: "i-lucide:server", color: "orange" },
    { name: "MONGODB", icon: "i-lucide:database", color: "yellow" },
    { name: "POSTGRESQL", icon: "i-lucide:database", color: "red" },
    { name: "NEXT.JS", icon: "i-lucide:globe", color: "blue" },
    { name: "TAILWIND", icon: "i-lucide:wind", color: "green" },
    { name: "DOCKER", icon: "i-lucide:cpu", color: "orange" },
];

onMounted(() => {
    const cards = document.querySelectorAll<HTMLElement>(".card-wrapper");
    cards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.08}s`;
    });

    const sectionObserver = new IntersectionObserver(
        ([entry]) => {
            if (!entry) return;

            if (entry.isIntersecting) {
                cards.forEach((card) => card.classList.add("visible"));
            } else {
                cards.forEach((card) => card.classList.remove("visible"));
            }
        },
        {
            threshold: 0.3,
        },
    );

    if (sectionRef.value) {
        sectionObserver.observe(sectionRef.value);
    }
});
</script>

<style scoped>
.skills {
    background: #111;
    padding: 6rem 2rem;
    color: white;
}

.skills__container {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
}

.skills__title {
    display: inline-block;
    margin-bottom: 4rem;
    transform: rotate(-1deg);
}

.skills__title h2 {
    font-size: 3rem;
    font-weight: 900;
}

.white {
    color: #fff;
}

.gradient {
    background: linear-gradient(90deg, #ffd600, #ff9800);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.underline {
    width: 100%;
    height: 6px;
    background: #ff3b3b;
}

.skills__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
}

.card-wrapper {
    position: relative;
    opacity: 0;
    transform: translateX(-120px);
    transition:
        transform 0.9s cubic-bezier(0.22, 1, 0.36, 1),
        opacity 0.9s ease;
}

.card-wrapper.visible {
    opacity: 1;
    transform: translateX(0);
}

.shadow-card {
    position: absolute;
    inset: 0;
    background: #000;
    border: 4px solid #fff;
    transform: translate(12px, 12px);
    transition: 0.15s ease;
}

.skill-card {
    position: relative;
    z-index: 1;
    padding: 2rem;
    border: 4px solid #fff;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    font-weight: 900;
    text-align: center;
    transition: 0.15s ease;
}

.card-wrapper:hover .skill-card {
    transform: translate(6px, 6px);
}

.card-wrapper:hover .shadow-card {
    transform: translate(6px, 6px);
}

.skill-card::before {
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    background: #000;
    border-radius: 50%;
    top: 5px;
    left: 5px;
}

.skill-card::after {
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    background: #000;
    border-radius: 50%;
    bottom: 5px;
    right: 5px;
}

.card-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    font-weight: 900;
    text-align: center;
}

.card-wrapper {
    position: relative;
}

.tape {
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%) rotate(3deg);
    width: 80px;
    height: 22px;
    background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.8),
        rgba(255, 255, 255, 0.2),
        rgba(255, 255, 255, 0.8)
    );
    opacity: 0.9;
    z-index: 5;
    box-shadow:
        0 2px 6px rgba(0, 0, 0, 0.25),
        inset 0 1px 0 rgba(255, 255, 255, 0.6);
    transition: 0.15s ease;
}

.card-wrapper:hover .tape {
    transform: translate(calc(-50% + 6px), 6px) rotate(3deg);
}

.yellow {
    background: #ffd600;
}

.red {
    background: #ff4d4d;
}

.blue {
    background: #1e6ee7;
}

.green {
    background: #00c853;
}

.orange {
    background: #ff9800;
}

@media (max-width: 768px) {
    .skills__title h2 {
        font-size: 2rem;
    }
}
</style>
