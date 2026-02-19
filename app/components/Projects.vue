<template>
    <section
        id="projects"
        class="!bg-[#f2f2f2] !text-[#111] !py-12 !px-[clamp(1rem,4vw,2.8rem)]"
    >
        <div class="!mx-auto !mb-16">
            <div class="relative inline-block">
                <div
                    class="title-my !font-black !tracking-[3px] !leading-[0.95] !text-[#111]"
                >
                    Meus
                </div>

                <div class="relative inline-flex items-end !gap-5 !mt-2">
                    <div
                        class="title-works relative inline-block !font-black !tracking-[3px] !leading-[0.95] !pr-[0.35em]"
                    >
                        <span
                            class="title-works__stroke absolute inset-0 pointer-events-none"
                            aria-hidden="true"
                        >
                            Projetos
                        </span>
                        <span
                            class="relative !text-transparent !bg-clip-text !bg-gradient-to-r !from-[#ff3b3b] !to-[#ffb020]"
                        >
                            Projetos
                        </span>
                        <span
                            class="absolute left-0 top-[calc(100%+0.18em)] w-full !h-1 !bg-black"
                        >
                            <span
                                class="absolute right-0 bottom-0 !w-1 !h-[0.9em] !bg-black"
                            ></span>
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <div
            class="!mx-auto grid !gap-9 justify-center items-start [grid-template-columns:repeat(auto-fit,minmax(min(360px,100%),1fr))]"
        >
            <article
                v-for="p in projects"
                :key="p.title"
                class="relative w-full !max-w-[420px] justify-self-center self-start"
            >
                <div
                    class="absolute inset-0 !translate-x-3 !translate-y-3 !border-[3px] !border-black z-0"
                    :class="
                        p.color === 'yellow'
                            ? '!bg-[#ffd500]'
                            : p.color === 'red'
                              ? '!bg-[#ff3b3b]'
                              : p.color === 'blue'
                                ? '!bg-[#2978ffe0]'
                                : '!bg-[#00e676]'
                    "
                ></div>

                <button
                    type="button"
                    class="group relative z-10 w-full text-left !bg-white !border-[3px] !border-black overflow-hidden !min-h-[480px] !h-auto flex flex-col will-change-transform !transition-transform !duration-200 [transition-timing-function:cubic-bezier(0.2,0.8,0.2,1)] hover:!translate-x-3 hover:!translate-y-3 hover:cursor-pointer"
                    @click="openProject(p)"
                >
                    <div class="!pt-5 !px-5">
                        <img
                            :src="p.image"
                            :alt="p.title"
                            class="block w-full h-auto !border-[3px] !border-black !bg-white !grayscale transition-[filter,transform] duration-200 group-hover:!grayscale-0 group-hover:contrast-[1.05] group-hover:scale-[1.01]"
                        />
                    </div>

                    <div class="!p-5 !pb-6 flex flex-col flex-1 min-h-0">
                        <div class="flex items-end justify-between !gap-4">
                            <h3
                                class="min-w-0 !text-[1.4rem] !font-black !tracking-[1px]"
                            >
                                {{ p.title }}
                            </h3>
                        </div>

                        <div
                            class="grid grid-cols-[4px_1fr] !gap-4 !mt-4 items-start"
                        >
                            <span class="!w-1 h-full !bg-[#f97316]"></span>
                            <p class="!m-0 !leading-[1.6] !text-[#222]">
                                {{ p.description }}
                            </p>
                        </div>

                        <div class="!mt-5 flex flex-wrap !gap-2.5">
                            <span
                                v-for="t in p.tags"
                                :key="t"
                                class="!border-2 !border-black !bg-white !px-2.5 !py-1 !font-black !text-xs !tracking-[0.6px]"
                            >
                                {{ t }}
                            </span>
                        </div>
                    </div>
                </button>
            </article>
        </div>

        <ProjectModal v-model="isProjectOpen" :project="selectedProject" />
    </section>
</template>

<script setup lang="ts">
import { projects } from "@/utils/projectsList";
import ProjectModal from "@/components/ProjectModal.vue";

const isProjectOpen = ref(false);
const selectedProject = ref<Project | null>(null);

function openProject(p: Project) {
    selectedProject.value = p;
    isProjectOpen.value = true;
}
</script>

<style scoped>
.title-my {
    font-size: clamp(2.6rem, 6vw, 5rem);
}

.title-works {
    font-size: clamp(2.6rem, 6vw, 5rem);
}

.title-works__stroke {
    color: transparent;
    text-shadow:
        -2px -2px 0 #000,
        0 -2px 0 #000,
        2px -2px 0 #000,
        -2px 0 0 #000,
        2px 0 0 #000,
        -2px 2px 0 #000,
        0 2px 0 #000,
        2px 2px 0 #000;
}
</style>
