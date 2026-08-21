<template>
    <UModal
        v-model:open="openModel"
        overlay
        fullscreen
        :ui="{
            content: '!p-0 !rounded-none !shadow-none !ring-0 !bg-transparent',
        }"
    >
        <template #content>
            <div
                class="!bg-white !text-[#111] !border-[2px] !border-black overflow-hidden flex flex-col w-screen h-[100dvh] box-border"
            >
                <div
                    class="flex items-center justify-between !p-3 !border-b-[2px] !border-black"
                >
                    <h2
                        class="!text-xl md:!text-2xl !font-black !tracking-[1px] !pl-2"
                    >
                        {{ project?.title }}
                    </h2>
                    <UButton
                        icon="i-lucide-x"
                        variant="solid"
                        class="!border-[2px] !border-black !rounded-none hover:cursor-pointer"
                        @click="openModel = false"
                    />
                </div>

                <div
                    class="flex-1 min-h-0 overflow-y-auto !p-5 md:!p-8 flex flex-col"
                >
                    <div
                        v-for="(item, index) in displayItems"
                        :key="index"
                        :class="
                            index === displayItems.length - 1
                                ? 'flex-1 flex flex-col'
                                : 'flex flex-col'
                        "
                    >
                        <hr
                            v-if="index > 0"
                            class="!border-t-[2px] !border-black !my-4 md:!my-4"
                        />

                        <div
                            class="grid grid-cols-1 md:grid-cols-2 !gap-8 items-start flex-1"
                        >
                            <div class="flex flex-col order-2 md:order-1">
                                <h3
                                    class="!text-lg md:!text-xl !font-black !mb-4 !tracking-[1px]"
                                >
                                    {{ item.title }}
                                </h3>

                                <div
                                    class="grid grid-cols-[4px_1fr] !gap-4 items-start"
                                >
                                    <span
                                        class="w-1 self-stretch !bg-[#f97316]"
                                    ></span>

                                    <p
                                        class="!m-0 !text-[#111] !leading-[1.75] whitespace-pre-line"
                                    >
                                        {{
                                            item.description ||
                                            "Sem descrição detalhada ainda."
                                        }}
                                    </p>
                                </div>

                                <div
                                    v-if="item.tags?.length"
                                    class="!mt-5 flex flex-wrap !gap-2.5"
                                >
                                    <span
                                        v-for="(t, i) in item.tags"
                                        :key="`${t}-${i}`"
                                        :class="
                                            getTagClassByProjectColor(
                                                project?.color,
                                                i,
                                            )
                                        "
                                        class="!border-2 !border-black !px-2.5 !py-1 !text-black !text-xs !tracking-[0.6px]"
                                    >
                                        {{ t }}
                                    </span>
                                </div>
                            </div>

                            <div class="order-1 md:order-2">
                                <div
                                    class="!border-[2px] !border-black overflow-hidden aspect-video w-full"
                                    :class="
                                        item.swaggerUrl || item.mermaidCode
                                            ? '!bg-white'
                                            : '!bg-black'
                                    "
                                >
                                    <ClientOnly
                                        v-if="item.swaggerUrl && openModel"
                                    >
                                        <div
                                            class="relative w-full h-full flex flex-col bg-white"
                                        >
                                            <UButton
                                                @click="toggleSwaggerFullscreen"
                                                icon="i-lucide-maximize"
                                                size="xs"
                                                class="absolute top-2 right-2 z-10 !border-2 !bg-white !border-black !rounded-none !font-bold !text-black hover:!bg-gray-300 !py-1 !px-1"
                                            >
                                                Expandir
                                            </UButton>
                                            <div
                                                :ref="
                                                    (el) => {
                                                        if (el)
                                                            swaggerContainer =
                                                                el as HTMLElement;
                                                    }
                                                "
                                                class="swagger-ui-container w-full h-full overflow-auto bg-white"
                                            ></div>
                                        </div>
                                    </ClientOnly>

                                    <ClientOnly
                                        v-else-if="
                                            item.mermaidCode && openModel
                                        "
                                    >
                                        <div
                                            class="relative w-full h-full flex items-center justify-center bg-white"
                                        >
                                            <UButton
                                                @click="toggleDiagramFullscreen"
                                                icon="i-lucide-maximize"
                                                size="xs"
                                                class="absolute top-2 right-2 z-10 !border-2 !bg-white !border-black !rounded-none !font-bold !text-black hover:!bg-gray-300 !py-1 !px-1"
                                            >
                                                Expandir
                                            </UButton>

                                            <div
                                                v-if="isMermaidLoading"
                                                class="absolute inset-0 flex items-center justify-center bg-white z-20"
                                            >
                                                <UIcon
                                                    name="i-lucide-loader-circle"
                                                    class="animate-spin text-3xl text-black"
                                                />
                                            </div>

                                            <div
                                                :ref="
                                                    (el) => {
                                                        if (el)
                                                            mermaidContainer =
                                                                el as HTMLElement;
                                                    }
                                                "
                                                class="mermaid w-full h-full flex items-center justify-center p-4 overflow-auto"
                                            ></div>
                                        </div>
                                    </ClientOnly>

                                    <ClientOnly
                                        v-else-if="item.youtubeId && openModel"
                                    >
                                        <iframe
                                            class="w-full h-full"
                                            :src="
                                                getYoutubeEmbedUrl(
                                                    item.youtubeId,
                                                )
                                            "
                                            title="YouTube video player"
                                            frameborder="0"
                                            allow="
                                                autoplay;
                                                encrypted-media;
                                                picture-in-picture;
                                                web-share;
                                            "
                                            allowfullscreen
                                            referrerpolicy="strict-origin-when-cross-origin"
                                        />
                                    </ClientOnly>

                                    <img
                                        v-else
                                        :src="item.image"
                                        :alt="item.title"
                                        class="w-full h-full object-contain"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </div>
                            </div>
                        </div>

                        <div
                            v-if="item.demo || item.github"
                            class="flex flex-wrap items-center justify-center sm:justify-start !gap-3"
                            :class="
                                !hasGallery
                                    ? '!mt-8 !pt-4 !border-t-[2px] !border-black'
                                    : index === displayItems.length - 1
                                      ? '!mt-8 !pt-4'
                                      : '!mt-8'
                            "
                        >
                            <UButton
                                v-if="item.demo"
                                :to="item.demo"
                                target="_blank"
                                variant="solid"
                                icon="i-lucide-external-link"
                                class="!w-fit !rounded-none !font-bold !tracking-[1px] !px-[1.2rem] !py-[0.6rem] !border-2 !border-black !transition-transform !duration-150 hover:!-translate-x-[2px] hover:!-translate-y-[2px] hover:![box-shadow:4px_4px_0_#000] !bg-[#3b82f6] !text-black"
                            >
                                ACESSAR SITE
                            </UButton>

                            <UButton
                                v-if="item.apiDemo"
                                :to="item.apiDemo"
                                target="_blank"
                                variant="solid"
                                icon="i-lucide-external-link"
                                class="!w-fit !rounded-none !font-bold !tracking-[1px] !px-[1.2rem] !py-[0.6rem] !border-2 !border-black !transition-transform !duration-150 hover:!-translate-x-[2px] hover:!-translate-y-[2px] hover:![box-shadow:4px_4px_0_#000] !bg-[#ffd500de] !text-black"
                            >
                                ACESSAR API
                            </UButton>

                            <UButton
                                v-if="item.github"
                                :to="item.github"
                                target="_blank"
                                variant="solid"
                                icon="i-lucide-github"
                                class="!w-fit !rounded-none !font-bold !tracking-[1px] !px-[1.2rem] !py-[0.6rem] !border-2 !border-black !transition-transform !duration-150 hover:!-translate-x-[2px] hover:!-translate-y-[2px] hover:![box-shadow:4px_4px_0_#000] !bg-white !text-black"
                            >
                                GITHUB
                            </UButton>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </UModal>
</template>

<script setup lang="ts">
import type { Project, ProjectGallery } from "@/utils/projectsList";
import { getTagClassByProjectColor } from "@/utils/tagsColors";

const props = defineProps<{
    modelValue: boolean;
    project: Project | null;
}>();

const emit = defineEmits<{
    (e: "update:modelValue", value: boolean): void;
}>();

const openModel = computed({
    get: () => props.modelValue,
    set: (v: boolean) => emit("update:modelValue", v),
});

const project = computed(() => props.project);
const hasGallery = computed(
    () => !!props.project?.gallery && props.project.gallery.length > 0,
);

const swaggerContainer = ref<HTMLElement | null>(null);
const mermaidContainer = ref<HTMLElement | null>(null);
const isMermaidLoading = ref(false);

const displayItems = computed<ProjectGallery[]>(() => {
    if (props.project?.gallery && props.project.gallery.length > 0) {
        return props.project.gallery.map((g) => ({
            ...g,
            demo: g.demo || props.project?.demo,
            github: g.github || props.project?.github,
        }));
    }
    if (props.project) {
        return [
            {
                title: props.project.title,
                description: props.project.details || props.project.description,
                image: props.project.image,
                youtubeId: props.project.youtubeId,
                tags: props.project.tags,
                demo: props.project.demo,
                github: props.project.github,
            },
        ];
    }
    return [];
});

watch([openModel, displayItems], async ([isOpen]) => {
    if (!isOpen) return;

    if (!import.meta.client) return;

    const mermaidItem = displayItems.value.find((i) => i.mermaidCode);
    if (mermaidItem) {
        isMermaidLoading.value = true;
    }

    setTimeout(async () => {
        const swaggerItem = displayItems.value.find((i) => i.swaggerUrl);
        if (swaggerItem && swaggerItem.swaggerUrl && swaggerContainer.value) {
            const SwaggerUIBundle = (
                await import("swagger-ui-dist/swagger-ui-bundle.js")
            ).default;
            await import("swagger-ui-dist/swagger-ui.css");

            SwaggerUIBundle({
                url: swaggerItem.swaggerUrl,
                domNode: swaggerContainer.value,
                layout: "BaseLayout",
                deepLinking: false,
            });
        }

        if (mermaidItem && mermaidItem.mermaidCode && mermaidContainer.value) {
            try {
                const mermaid = (await import("mermaid")).default;

                mermaid.initialize({
                    startOnLoad: false,
                    theme: "base",
                    flowchart: {
                        htmlLabels: true,
                        useMaxWidth: true,
                        padding: 15,
                    },
                    themeVariables: {
                        background: "#ffffff",
                        primaryColor: "#ffffff",
                        primaryTextColor: "#111111",
                        primaryBorderColor: "#000000",
                        lineColor: "#000000",
                        secondaryColor: "#f4f4f4",
                        tertiaryColor: "#ffffff",
                        fontFamily: "Arial, sans-serif",
                        fontSize: "16px",
                    },
                });

                mermaidContainer.value.innerHTML = mermaidItem.mermaidCode;
                await mermaid.run({ nodes: [mermaidContainer.value] });
            } catch (error) {
                console.error("Erro ao renderizar diagrama:", error);
            } finally {
                isMermaidLoading.value = false;
            }
        }
    }, 100);
});

function getYoutubeEmbedUrl(rawId?: string) {
    if (!rawId) return "";

    const id = extractYouTubeId(rawId);
    if (!id) return "";

    const params = new URLSearchParams({
        autoplay: "1",
        mute: "1",
        playsinline: "1",
        rel: "0",
        modestbranding: "1",
    });

    return `https://www.youtube-nocookie.com/embed/${id}?${params.toString()}`;
}

function extractYouTubeId(input: string) {
    if (/^[a-zA-Z0-9_-]{11}$/.test(input)) return input;

    try {
        const u = new URL(input);

        if (u.hostname.includes("youtu.be")) {
            return u.pathname.replace("/", "");
        }

        const v = u.searchParams.get("v");
        if (v) return v;

        const parts = u.pathname.split("/").filter(Boolean);
        return parts[parts.length - 1] ?? "";
    } catch {
        return "";
    }
}

function toggleDiagramFullscreen() {
    if (!mermaidContainer.value) return;

    if (!document.fullscreenElement) {
        mermaidContainer.value.requestFullscreen().catch((err) => {
            console.error("Erro ao tentar abrir em tela cheia:", err);
        });
    } else {
        document.exitFullscreen();
    }
}

function toggleSwaggerFullscreen() {
    if (!swaggerContainer.value) return;

    if (!document.fullscreenElement) {
        swaggerContainer.value.requestFullscreen().catch((err) => {
            console.error("Erro ao tentar abrir em tela cheia:", err);
        });
    } else {
        document.exitFullscreen();
    }
}
</script>

<style scoped>
.mermaid {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffffff;
}

.mermaid :deep(svg) {
    max-width: 100%;
    height: auto !important;
    max-height: 100%;
}

.mermaid:fullscreen {
    background: #ffffff;
    width: 100vw;
    height: 100vh;
    padding: 2rem;
}

.mermaid:fullscreen :deep(svg) {
    max-width: 90%;
    width: 100%;
    height: 100% !important;
    max-height: 90vh;
}

.swagger-ui-container:fullscreen {
    background: #ffffff;
    width: 100vw;
    height: 100vh;
    padding: 2rem;
    overflow: auto;
}

.swagger-ui-container:fullscreen :deep(.swagger-ui) {
    max-width: 1200px;
    margin: 0 auto;
}
</style>
