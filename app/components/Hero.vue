<template>
    <section
        id="hero"
        class="relative min-h-screen !px-6 !py-8 overflow-hidden text-white text-center grid [grid-template-rows:1fr_auto] bg-[url('/assets/imgs/hero.jpg')] bg-center bg-cover"
    >
        <div class="absolute inset-0 bg-black/65 z-0" />

        <div class="relative z-10 flex flex-col items-center justify-center">
            <img
                src="/assets/imgs/js.png"
                alt="JavaScript"
                class="absolute z-10 pointer-events-none w-[clamp(50px,6vw,80px)] left-[5%] top-[5%] rotate-[-20deg] [filter:drop-shadow(0_0_10px_rgba(247,223,30,0.5))] animate-[float_3s_ease-in-out_infinite] max-sm:opacity-40"
            />
            <img
                src="/assets/imgs/code.png"
                alt="Code"
                class="absolute z-10 pointer-events-none w-[clamp(50px,6vw,80px)] right-[8%] bottom-[10%] [filter:drop-shadow(0_0_10px_rgba(255,255,255,0.5))] animate-[pulseScale_2.5s_ease-in-out_infinite] max-sm:opacity-40"
            />

            <div
                class="!mb-[clamp(1.5rem,4vw,3rem)] bg-yellow-400 text-black !px-4 !py-[0.4rem] !font-bold rotate-[-5deg]"
            >
                Dev Fullstack
            </div>

            <h1 class="leading-none">
                <span class="block text-[clamp(2.5rem,8vw,6rem)] font-black"
                    >Guilherme</span
                >
                <span
                    class="block text-[clamp(2.5rem,8vw,6rem)] font-black text-[#ff3b3b]"
                    >Augusto</span
                >
            </h1>

            <p
                class="!mt-6 !px-4 !py-[0.6rem] !border-2 !border-white bg-black/70 tracking-[2px] max-w-[600px] rotate-[-1deg]"
            >
                Criando arte
                <span class="text-green-500 font-bold">através</span>
                do
                <span class="text-blue-500 font-bold">código</span>
            </p>

            <div
                class="!mt-[clamp(2rem,5vw,3rem)] !mb-[30px] flex flex-wrap justify-center gap-4 max-w-[900px] max-sm:flex-col max-sm:items-center w-full"
            >
                <UButton
                    size="md"
                    class="!px-6 !py-[0.9rem] !rounded-none !font-bold tracking-[1px] !border-2 !border-black min-w-[180px] !bg-orange-500 !text-black hover:!translate-x-[-3px] hover:!translate-y-[-3px] hover:!shadow-[4px_4px_0_#000] !transition-[transform,box-shadow] !duration-150"
                    @click="scrollTo('projects')"
                >
                    MEUS PROJETOS
                </UButton>

                <UButton
                    size="md"
                    class="!px-6 !py-[0.9rem] !rounded-none !font-bold tracking-[1px] !border-2 !border-black min-w-[180px] !bg-white !text-black hover:!translate-x-[-3px] hover:!translate-y-[-3px] hover:!shadow-[4px_4px_0_#000] !transition-[transform,box-shadow] !duration-150"
                    @click="scrollTo('about')"
                >
                    QUEM SOU EU?
                </UButton>

                <UButton
                    size="md"
                    class="!px-6 !py-[0.9rem] !rounded-none !font-bold tracking-[1px] !border-2 !border-black min-w-[180px] !bg-yellow-400 !text-black hover:!translate-x-[-3px] hover:!translate-y-[-3px] hover:!shadow-[4px_4px_0_#000] !transition-[transform,box-shadow] !duration-150"
                    @click="scrollTo('skills')"
                >
                    MINHAS SKILLS
                </UButton>

                <UButton
                    size="md"
                    trailing-icon="i-lucide-download"
                    class="!px-6 !py-[0.9rem] !rounded-none !font-bold tracking-[1px] !border-2 !border-black min-w-[180px] !bg-blue-500 !text-black hover:!translate-x-[-3px] hover:!translate-y-[-3px] hover:!shadow-[4px_4px_0_#000] !transition-[transform,box-shadow] !duration-150"
                    @click="downloadCv"
                >
                    CURRÍCULO
                </UButton>
            </div>
        </div>

        <div
            @click="scrollTo('footer')"
            class="absolute bottom-5 right-5 md:bottom-10 md:right-10 w-10 h-10 rounded-full bg-green-500 text-black flex items-center justify-center cursor-pointer transition-transform duration-200 hover:-translate-y-1 z-20 shadow-lg"
        >
            <Icon name="uil:arrow-down" size="22px" />
        </div>
    </section>
</template>

<script setup lang="ts">
import { useScrollTo } from "~/composables/useScrollTo";

const { scrollTo } = useScrollTo();

const downloadCv = () => {
    const url = "/cv/Guilherme-augusto.pdf";
    const a = document.createElement("a");
    a.href = url;
    a.download = "Guilherme-augusto.pdf";
    a.rel = "noopener noreferrer";
    document.body.appendChild(a);
    a.click();
    a.remove();
};
</script>

<style>
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
</style>
