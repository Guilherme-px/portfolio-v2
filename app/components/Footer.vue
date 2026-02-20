<template>
    <footer
        id="footer"
        class="relative bg-black text-white overflow-hidden border-t-8 border-[#ff3b3b] min-h-[50vh] !py-10 !md:py-0"
    >
        <div class="absolute inset-0">
            <img
                src="/assets/imgs/hero.jpg"
                class="w-full h-full object-cover opacity-30"
                alt=""
            />
            <div class="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
        </div>

        <div
            class="relative z-10 min-h-[inherit] flex flex-col items-center justify-start md:justify-center gap-12 md:gap-16 text-center !px-6"
        >
            <div
                class="w-full max-w-6xl !px-6 flex flex-col items-center !gap-12 !pt-6 md:pt-0"
            >
                <h2
                    class="max-w-3xl text-5xl md:text-6xl font-extrabold leading-tight"
                >
                    VAMOS
                    <span
                        class="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent"
                        >CRIAR</span
                    >
                    <br />
                    ALGO INCRÍVEL?
                </h2>

                <div class="flex items-center justify-center gap-8">
                    <a
                        :href="whatsAppWebUrl"
                        @click.prevent="openWhatsApp"
                        rel="noopener noreferrer"
                        class="w-20 h-20 flex items-center justify-center border-4 border-white transition-all duration-300 hover:-translate-y-2 bg-green-500"
                    >
                        <Icon name="lucide:message-circle-more" size="28" />
                    </a>

                    <a
                        :href="linkedInWebUrl"
                        @click.prevent="openLinkedIn"
                        rel="noopener noreferrer"
                        class="w-20 h-20 flex items-center justify-center border-4 border-white transition-all duration-300 hover:-translate-y-2 bg-blue-600"
                    >
                        <Icon name="lucide:linkedin" size="28" />
                    </a>

                    <a
                        :href="mailtoUrl"
                        @click.prevent="openEmail"
                        rel="noopener noreferrer"
                        class="w-20 h-20 flex items-center justify-center border-4 border-white transition-all duration-300 hover:-translate-y-2 bg-red-500"
                    >
                        <Icon name="lucide:mail" size="28" />
                    </a>
                </div>
            </div>

            <div class="w-[92vw] max-w-none">
                <USeparator class="w-full opacity-60" />
            </div>

            <div
                class="w-full max-w-6xl !px-6 flex flex-col items-center gap-4"
            >
                <p class="text-sm text-gray-400">
                    © 2026 GUILHERME AUGUSTO PORTFOLIO
                </p>

                <div
                    class="inline-block bg-yellow-400 text-black font-bold !px-4 !py-1 text-sm tracking-wide"
                >
                    FEITO COM ❤️ & NUXT
                </div>
            </div>

            <div
                @click="scrollTo('hero')"
                class="absolute bottom-5 right-5 md:bottom-10 md:right-10 w-10 h-10 rounded-full bg-green-500 text-black flex items-center justify-center cursor-pointer transition-transform duration-200 hover:-translate-y-1 z-20 shadow-lg"
            >
                <Icon name="uil:arrow-up" size="22px" />
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useScrollTo } from "~/composables/useScrollTo";

const { scrollTo } = useScrollTo();
const config = useRuntimeConfig();

const LINKEDIN_USERNAME = String(config.public.linkedinUsername ?? "");
const WHATSAPP_PHONE = String(config.public.whatsappPhone ?? "");
const EMAIL = String(config.public.email ?? "");
const EMAIL_SUBJECT = String(config.public.emailSubject ?? "");
const EMAIL_BODY = String(config.public.emailBody ?? "");

const isMobilePointer = () => window.matchMedia("(pointer: coarse)").matches;

const linkedInWebUrl = computed(
    () => `https://www.linkedin.com/in/${LINKEDIN_USERNAME}/`,
);
const linkedInAppUrl = computed(() => `linkedin://in/${LINKEDIN_USERNAME}`);

const whatsAppWebUrl = computed(() => `https://wa.me/${WHATSAPP_PHONE}`);
const whatsAppAppUrl = computed(
    () => `whatsapp://send?phone=${WHATSAPP_PHONE}`,
);

const mailtoUrl = computed(() => {
    const subject = encodeURIComponent(EMAIL_SUBJECT);
    const body = encodeURIComponent(EMAIL_BODY);
    return `mailto:${EMAIL}?subject=${subject}&body=${body}`;
});

const openLinkedIn = () => {
    const webUrl = linkedInWebUrl.value;
    const appUrl = linkedInAppUrl.value;

    if (isMobilePointer()) {
        window.location.href = appUrl;
        setTimeout(() => (window.location.href = webUrl), 600);
    } else {
        window.open(webUrl, "_blank", "noopener,noreferrer");
    }
};

const openWhatsApp = () => {
    const webUrl = whatsAppWebUrl.value;
    const appUrl = whatsAppAppUrl.value;

    if (isMobilePointer()) {
        window.location.href = appUrl;
        setTimeout(() => (window.location.href = webUrl), 600);
    } else {
        window.open(webUrl, "_blank", "noopener,noreferrer");
    }
};

const openEmail = () => {
    const url = mailtoUrl.value;
    if (isMobilePointer()) window.location.href = url;
    else window.open(url, "_blank", "noopener,noreferrer");
};
</script>
