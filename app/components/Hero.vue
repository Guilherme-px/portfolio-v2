<template>
    <section class="hero" id="hero">
        <div class="overlay"></div>

        <div class="hero-content">
            <img
                src="/assets/imgs/js.png"
                alt="JavaScript"
                class="floating-js floating-top"
            />
            <img
                src="/assets/imgs/code.png"
                alt="JavaScript"
                class="floating-code floating-bottom"
            />

            <div class="portfolio-tag">Dev Fullstack</div>

            <h1 class="title">
                <span class="title_highlight">Guilherme</span>
                <span class="title_accent">Augusto</span>
            </h1>

            <p class="subtitle">
                Criando arte
                <span class="subtitle_highlight">através</span>
                do
                <span class="subtitle_accent">código</span>
            </p>

            <div class="actions">
                <UButton class="btn primary" size="md">MEUS PROJETOS</UButton>
                <UButton
                    class="btn secondary"
                    size="md"
                    @click="scrollTo('about')"
                    >QUEM SOU EU?</UButton
                >
                <UButton class="btn tertiary" size="md">MINHAS SKILLS</UButton>
                <UButton
                    class="btn quaternary"
                    trailing-icon="i-lucide:download"
                    size="md"
                    >CRRRÍCULO</UButton
                >
            </div>
        </div>

        <div class="scroll" @click="scrollTo('footer')">
            <Icon name="uil:arrow-down" size="24px" />
        </div>
    </section>
</template>

<script setup lang="ts">
const scrollTo = (section: string) => {
    const el = document.getElementById(section);
    el?.scrollIntoView({ behavior: "smooth" });
};
</script>

<style scoped>
.hero {
    position: relative;
    min-height: 100vh;
    padding: 2rem 1.5rem;
    background: url("/assets/imgs/hero.jpg") center/cover no-repeat;
    display: grid;
    grid-template-rows: 1fr auto;
    align-items: center;
    text-align: center;
    color: #fff;
    overflow: hidden;
}

.overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.65);
    z-index: 0;
}

.hero-content {
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.portfolio-tag {
    margin-bottom: clamp(1.5rem, 4vw, 3rem);
    background: #facc15;
    color: #000;
    padding: 0.4rem 1rem;
    font-weight: bold;
    transform: rotate(-5deg);
    z-index: 1;
}

.title {
    z-index: 1;
    line-height: 1;
}

.title_highlight,
.title_accent {
    display: block;
    font-size: clamp(2.5rem, 8vw, 6rem);
    font-weight: 900;
}

.title_accent {
    color: #ff3b3b;
}

.subtitle {
    z-index: 1;
    margin-top: 1.5rem;
    padding: 0.6rem 1rem;
    border: 2px solid #fff;
    background: rgba(0, 0, 0, 0.7);
    letter-spacing: 2px;
    max-width: 600px;
}

.subtitle_highlight {
    color: #22c55e;
    font-weight: bold;
}

.subtitle_accent {
    color: #3b82f6;
    font-weight: bold;
}

.actions {
    z-index: 1;
    margin-top: clamp(2rem, 5vw, 3rem);
    margin-bottom: 30px;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 900px;
}

:deep(.btn) {
    padding: 0.9rem 1.6rem;
    border-radius: 0;
    font-weight: bold;
    letter-spacing: 1px;
    cursor: pointer;
    border: 2px solid #000;
    transition:
        transform 0.15s ease,
        box-shadow 0.15s ease;
    min-width: 180px;
}

:deep(.btn:hover) {
    transform: translate(-3px, -3px);
    box-shadow: 4px 4px 0 #000;
}

:deep(.primary) {
    background: #f97316;
    color: #000;
}
:deep(.secondary) {
    background: #fff;
    color: #000;
}
:deep(.tertiary) {
    background: #facc15;
    color: #000;
}
:deep(.quaternary) {
    background: #3b82f6;
    color: #000;
}

.scroll {
    justify-self: center;
    margin-bottom: 1rem;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #22c55e;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 1;
}

.floating-js,
.floating-code {
    position: absolute;
    z-index: 1;
    pointer-events: none;
}

.floating-js {
    width: clamp(50px, 6vw, 80px);
    filter: drop-shadow(0 0 10px rgba(247, 223, 30, 0.5));
}

.floating-code {
    width: clamp(50px, 6vw, 80px);
    filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.5));
}

.floating-top {
    top: 5%;
    left: 5%;
    transform: rotate(-20deg);
    animation: float 3s ease-in-out infinite;
}

.floating-bottom {
    bottom: 10%;
    right: 8%;
    animation: pulseScale 2.5s ease-in-out infinite;
}

@keyframes float {
    0%,
    100% {
        transform: translateY(0) rotate(-20deg);
    }
    50% {
        transform: translateY(-15px) rotate(-20deg);
    }
}

@keyframes pulseScale {
    0%,
    100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.15);
    }
}

@media (max-width: 640px) {
    .actions {
        flex-direction: column;
        align-items: center;
    }

    .btn {
        width: 100%;
        max-width: 320px;
    }

    .floating-js,
    .floating-code {
        opacity: 0.4;
    }
}
</style>
