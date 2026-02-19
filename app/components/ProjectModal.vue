<template>
    <UModal
        v-model:open="openModel"
        overlay
        :ui="{
            content:
                '!p-0 !rounded-none !shadow-none !ring-0 !bg-transparent !max-w-[70vw]',
        }"
    >
        <template #content>
            <div
                class="!bg-white !text-[#111] !border-[2px] !border-black overflow-hidden flex flex-col max-h-[calc(100dvh-1.5rem)]"
            >
                <div
                    class="flex items-start justify-end gap-4 !p-3 !border-b-[2px] !border-black"
                >
                    <UButton
                        icon="i-lucide-x"
                        variant="solid"
                        class="!border-[2px] !border-black !rounded-none hover:cursor-pointer"
                        @click="openModel = false"
                    />
                </div>

                <div
                    class="flex-1 min-h-0 grid"
                    :class="
                        hasLinks ? 'grid-rows-[1fr_auto]' : 'grid-rows-[1fr]'
                    "
                >
                    <div
                        class="min-h-0 grid"
                        :class="
                            hasImage
                                ? 'grid-cols-1 md:grid-cols-2'
                                : 'grid-cols-1'
                        "
                    >
                        <div
                            v-if="hasImage"
                            class="hidden md:block !p-5 md:!border-r-[2px] md:!border-black"
                        >
                            <div
                                class="!border-[2px] !border-black !bg-black overflow-hidden aspect-video w-full"
                            >
                                <ClientOnly
                                    v-if="project?.youtubeId && openModel"
                                >
                                    <iframe
                                        class="w-full h-full"
                                        :src="youtubeEmbedUrl"
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
                                    :src="project!.image"
                                    :alt="project?.title || 'Projeto'"
                                    class="w-full h-full object-cover"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                        </div>

                        <div class="!p-5 flex flex-col min-h-0">
                            <div class="flex-1 min-h-0 overflow-y-auto !pr-2">
                                <div
                                    class="grid grid-cols-[4px_1fr] !gap-4 items-start"
                                >
                                    <span
                                        class="w-1 self-stretch !bg-[#f97316]"
                                    ></span>

                                    <div class="min-w-0">
                                        <p
                                            class="!m-0 !text-[#111] !leading-[1.75] whitespace-pre-line"
                                        >
                                            {{
                                                project?.details ||
                                                "Sem descrição detalhada ainda."
                                            }}
                                        </p>
                                    </div>
                                </div>

                                <div
                                    v-if="project?.tags?.length"
                                    class="!mt-5 flex flex-wrap !gap-2.5"
                                >
                                    <span
                                        v-for="t in project.tags"
                                        :key="t"
                                        class="!border-2 !border-black !bg-white !px-2.5 !py-1 !text-black !text-xs !tracking-[0.6px]"
                                    >
                                        {{ t }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        v-if="hasLinks"
                        class="!p-5 !border-t-[2px] !border-black"
                    >
                        <div
                            class="flex flex-wrap items-center justify-center sm:justify-start !gap-3"
                        >
                            <UButton
                                v-if="project?.demo"
                                :to="project.demo"
                                target="_blank"
                                variant="solid"
                                icon="i-lucide-external-link"
                                class="!w-fit !rounded-none !font-bold !tracking-[1px] !px-[1.2rem] !py-[0.6rem] !border-2 !border-black !transition-transform !duration-150 hover:!-translate-x-[2px] hover:!-translate-y-[2px] hover:![box-shadow:4px_4px_0_#000] !bg-[#3b82f6] !text-black"
                            >
                                VER PROJETO
                            </UButton>

                            <UButton
                                v-if="project?.github"
                                :to="project.github"
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
import type { Project } from "@/utils/projectsList";

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
const hasImage = computed(() => !!props.project?.image);
const hasLinks = computed(
    () => !!project.value?.demo || !!project.value?.github,
);

const youtubeEmbedUrl = computed(() => {
    const raw = project.value?.youtubeId;
    if (!raw) return "";

    const id = extractYouTubeId(raw);
    if (!id) return "";

    const params = new URLSearchParams({
        autoplay: "1",
        mute: "1",
        playsinline: "1",
        rel: "0",
        modestbranding: "1",
    });

    return `https://www.youtube-nocookie.com/embed/${id}?${params.toString()}`;
});

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
</script>
