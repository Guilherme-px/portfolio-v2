<template>
    <section id="skills" class="bg-[#111] text-white !py-24 !px-12">
        <div class="mx-auto w-full text-center">
            <div class="inline-block !mb-16 -rotate-1">
                <h2
                    class="!text-5xl md:!text-6xl !font-extrabold !leading-tight"
                >
                    <span class="text-white">MINHAS</span>
                    <span
                        class="bg-gradient-to-r from-[#ffd600] to-[#ff9800] bg-clip-text text-transparent"
                    >
                        SKILLS
                    </span>
                </h2>
                <div class="!h-[6px] !w-full !bg-[#ff3b3b]" />
            </div>

            <div
                class="grid !gap-8 [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))]"
            >
                <div
                    v-for="(skill, index) in skills"
                    :key="skill.name"
                    class="group relative opacity-0 -translate-x-[120px] transition-[transform,opacity] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                >
                    <div
                        class="absolute inset-0 bg-black !border-[4px] !border-white translate-x-3 translate-y-3 transition-transform duration-150 group-hover:!translate-x-[6px] group-hover:!translate-y-[6px]"
                    />

                    <UCard
                        :ui="{
                            root: '!rounded-none !shadow-none !ring-0 !ring-offset-0 !bg-[color:var(--card-bg)]',
                            body: '!p-0',
                            header: '!p-0',
                            footer: '!p-0',
                        }"
                        class="relative z-10 !border-[4px] !border-white !rounded-none !shadow-none !ring-0 !ring-offset-0 !overflow-hidden transition-transform duration-150 group-hover:!translate-x-[6px] group-hover:!translate-y-[6px]"
                        :style="{
                            '--card-bg': skill.brand,
                            '--fg': skill.fg,
                        }"
                    >
                        <div
                            class="relative !flex !flex-col !items-center !justify-center !gap-4 !p-8 !font-black !text-center !leading-none text-[color:var(--fg)]"
                        >
                            <span
                                class="absolute left-[5px] top-[5px] !w-2 !h-2 !rounded-full !bg-black"
                            />
                            <span
                                class="absolute right-[5px] bottom-[5px] !w-2 !h-2 !rounded-full !bg-black"
                            />

                            <i
                                v-if="skill.icon"
                                :class="skill.icon"
                                class="!text-[40px] !leading-none !text-[color:var(--fg)]"
                            />

                            <img
                                v-else-if="skill.iconImg"
                                :src="skill.iconImg"
                                class="!w-10 !h-10"
                                :style="
                                    skill.fg === '#fff'
                                        ? 'filter: brightness(0) invert(1)'
                                        : 'filter: none'
                                "
                                alt=""
                            />

                            <strong class="!m-0 !p-0 !tracking-wide">{{
                                skill.name
                            }}</strong>
                        </div>
                    </UCard>

                    <div
                        class="absolute -top-3 left-1/2 translate-x-[-50%] rotate-[3deg] !w-20 !h-[22px] !opacity-90 z-20 bg-gradient-to-r from-white/80 via-white/20 to-white/80 shadow-[0_2px_6px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.6)] transition-transform duration-150 group-hover:!translate-x-[calc(-50%+6px)] group-hover:!translate-y-[6px]"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { rawSkills } from "@/utils/iconsList";

function pickFg(hex: string) {
    const h = hex.replace("#", "");
    const r = parseInt(h.slice(0, 2), 16);
    const g = parseInt(h.slice(2, 4), 16);
    const b = parseInt(h.slice(4, 6), 16);
    const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    return lum > 160 ? "#111" : "#fff";
}

const skills = rawSkills.map((s) => ({ ...s, fg: pickFg(s.brand) }));

onMounted(() => {
    const cards = Array.from(
        document.querySelectorAll<HTMLElement>("#skills .group"),
    );

    cards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.08}s`;
    });

    if (!("IntersectionObserver" in window)) {
        cards.forEach((el) => {
            el.classList.remove("opacity-0", "-translate-x-[120px]");
            el.classList.add("!opacity-100", "!translate-x-0");
        });
        return;
    }

    const obs = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                const el = entry.target as HTMLElement;
                el.classList.remove("opacity-0", "-translate-x-[120px]");
                el.classList.add("!opacity-100", "!translate-x-0");
                obs.unobserve(el);
            });
        },
        { threshold: 0.1, rootMargin: "0px 0px -10% 0px" },
    );

    cards.forEach((el) => obs.observe(el));
});
</script>
