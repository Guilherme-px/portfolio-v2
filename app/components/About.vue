<template>
    <section
        id="about"
        class="relative !py-24 !px-16 max-lg:!py-16 max-lg:!px-8 max-md:!py-12 max-md:!px-6 !bg-[#f2f2f2] !text-[#111] overflow-hidden"
    >
        <div class="flex justify-center !mb-28">
            <div class="relative">
                <div
                    class="absolute !top-[-18px] !left-[-5px] !w-[110px] !h-[30px] !bg-[#ffd500de] !-rotate-12 z-[1] max-md:!w-[100px] max-md:!h-[28px]"
                />
                <div
                    class="absolute !bottom-[-12px] !right-[-8px] !w-[100px] !h-[25px] !bg-[#2978ffe0] !rotate-[15deg] z-[1] max-md:!bottom-[-16px] max-md:!right-[-12px] max-md:!w-[90px] max-md:!h-[25px] max-[480px]:!w-[70px] max-[480px]:!h-[25px]"
                />

                <div
                    class="relative inline-flex items-center gap-2 !border-[3px] !border-[rgb(255,77,77)] !bg-[#111] !text-white !px-[1.6rem] !py-[0.7rem] !-rotate-2 !shadow-[6px_6px_0_#000] !text-[2.5rem] !font-black max-lg:!text-[2rem] max-md:!text-[1.6rem] max-md:!px-[1.2rem] max-md:!py-[0.6rem] max-[480px]:!text-[1.3rem] max-[480px]:text-center"
                >
                    <span>SOBRE</span>
                    <span class="!text-[#ff3c3c]">MIM</span>
                </div>
            </div>
        </div>

        <div
            class="grid [grid-template-columns:1.2fr_1fr] !gap-12 !mt-12 items-start max-lg:grid-cols-1 max-lg:!gap-8"
        >
            <div
                class="relative !border-[3px] !border-black !p-8 !shadow-[8px_7px_0_#000] !bg-white max-md:!p-6"
            >
                <span
                    class="absolute !top-[-10px] !left-[-10px] !w-5 !h-5 !rounded-full !border-2 !border-black !bg-[#00e676]"
                />
                <span
                    class="absolute !top-[-10px] !right-[-12px] !w-5 !h-5 !rounded-full !border-2 !border-black !bg-[#ff5252]"
                />

                <p class="!text-[1.1rem] !leading-[1.6] max-md:!text-[1rem]">
                    Sou um desenvolvedor
                    <span class="!bg-yellow-300 !px-1">fullstack</span> formado
                    em Análise e Desenvolvimento de Sistemas pela
                    <span class="!bg-yellow-300 !px-1">UNIPAR (2020)</span>.
                    Desde 2021 desenvolvo aplicações modernas com foco na
                    <span class="!bg-yellow-300 !px-1">stack JavaScript</span>,
                    atuando do frontend ao backend com atenção a arquitetura,
                    segurança e performance.
                </p>

                <p class="!text-[1.1rem] !leading-[1.6] max-md:!text-[1rem]">
                    Trabalho na construção de interfaces escaláveis e APIs
                    robustas, aplicando boas práticas, testes automatizados e
                    organização de código para garantir qualidade do
                    desenvolvimento até a entrega.
                </p>

                <p class="!mt-6 !text-[#444]">
                    // Código limpo, arquitetura bem pensada e soluções prontas
                    para escalar.
                </p>

                <div class="flex !gap-2 !mt-6 max-[480px]:flex-wrap">
                    <span
                        v-for="tag in tags"
                        :key="tag.label"
                        class="inline-flex items-center !gap-2 !px-[0.6rem] !py-[0.3rem] !font-bold !border-2 !border-black"
                        :class="[
                            tag.color === 'yellow'
                                ? '!bg-[#ffd600] !text-black'
                                : '',
                            tag.color === 'blue'
                                ? '!bg-[#2979ff] !text-white'
                                : '',
                            tag.color === 'red'
                                ? '!bg-[#ff5252] !text-white'
                                : '',
                            tag.color === 'green'
                                ? '!bg-[#69f0ae] !text-black'
                                : '',
                        ]"
                    >
                        <Icon
                            v-if="isMobile && tag.icon"
                            :name="tag.icon"
                            size="20px"
                            class="inline-block"
                        />
                        <span class="max-[480px]:!text-[0.8rem]">{{
                            tag.label
                        }}</span>
                    </span>
                </div>
            </div>

            <div
                class="grid !gap-6 [grid-template-columns:repeat(auto-fit,minmax(320px,1fr))] max-lg:!grid-cols-2 max-md:!grid-cols-2 max-[480px]:!hidden"
            >
                <div
                    v-for="card in cards"
                    :key="card.title"
                    class="group !border-[3px] !border-black !p-8 flex flex-col !gap-4 !min-h-[140px] !shadow-[8px_8px_0_#000] transform-gpu transition-all duration-300 ease-out hover:!translate-x-[4px] hover:!translate-y-[4px] hover:!shadow-[4px_4px_0_#000] max-md:!p-6"
                    :class="[
                        card.color === 'yellow' ? '!bg-[#ffd600]' : '',
                        card.color === 'red' ? '!bg-[#ff8a80]' : '',
                        card.color === 'blue' ? '!bg-[#82b1ff]' : '',
                        card.color === 'green' ? '!bg-[#69f0ae]' : '',
                    ]"
                >
                    <div
                        class="!w-[50px] !h-[50px] !bg-white !border-[3px] !border-black !shadow-[6px_6px_0_#000] flex items-center justify-center transform-gpu transition-all duration-300 ease-out group-hover:!translate-x-[3px] group-hover:!translate-y-[3px] group-hover:!shadow-[3px_3px_0_#000]"
                    >
                        <Icon :name="card.icon" size="26px" />
                    </div>

                    <strong
                        class="!font-bold !text-[1.2em] [text-shadow:-0.3px_0_0_#000,0.3px_0_0_#000,0_-0.3px_0_#000,0_0.3px_0_#000]"
                    >
                        {{ card.title }}
                    </strong>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { computed, onMounted, onBeforeUnmount, ref } from "vue";

type Tag = {
    label: string;
    color: string;
    icon?: string;
};

const isMobile = ref(false);

const cards = [
    {
        title: "ARQUITETURA & ESCALABILIDADE",
        icon: "i-lucide:layers",
        color: "yellow",
    },
    { title: "BACKEND & APIs", icon: "i-lucide:server", color: "red" },
    { title: "CLOUD & DEVOPS", icon: "i-lucide:cloud", color: "blue" },
    {
        title: "TESTES & QUALIDADE",
        icon: "i-lucide:test-tube-2",
        color: "green",
    },
];

const tags = computed<Tag[]>(() => {
    if (isMobile.value) {
        return cards.map((card) => ({
            label: card.title,
            color: card.color,
            icon: card.icon,
        }));
    }

    return [
        { label: "#FULLSTACK", color: "yellow" },
        { label: "#JAVASCRIPT", color: "blue" },
        { label: "#PERFORMANCE", color: "red" },
    ];
});

const checkScreen = () => {
    isMobile.value = window.innerWidth <= 480;
};

onMounted(() => {
    checkScreen();
    window.addEventListener("resize", checkScreen);
});

onBeforeUnmount(() => {
    window.removeEventListener("resize", checkScreen);
});
</script>
