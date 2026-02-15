<template>
    <section class="about" id="about">
        <div class="about__title-wrapper">
            <div class="sticker">
                <div class="sticker-yellow"></div>
                <div class="sticker-black">
                    <span>SOBRE</span>
                    <span class="highlight">MIM</span>
                </div>
                <div class="sticker-blue"></div>
            </div>
        </div>

        <div class="about__content">
            <div class="about__box">
                <p>
                    Sou um desenvolvedor
                    <span class="highlight-text">fullstack</span>
                    formado em Análise e Desenvolvimento de Sistemas pela
                    <span class="highlight-text">UNIPAR (2020)</span>. Desde
                    2021 desenvolvo aplicações modernas com foco na
                    <span class="highlight-text">stack JavaScript</span>,
                    atuando do frontend ao backend com atenção a arquitetura,
                    segurança e performance.
                </p>

                <p>
                    Trabalho na construção de interfaces escaláveis e APIs
                    robustas, aplicando boas práticas, testes automatizados e
                    organização de código para garantir qualidade do
                    desenvolvimento até a entrega.
                </p>

                <p class="comment">
                    // Código limpo, arquitetura bem pensada e soluções prontas
                    para escalar.
                </p>

                <div class="tags">
                    <span
                        v-for="tag in tags"
                        :key="tag.label"
                        :class="['tag', tag.color]"
                    >
                        <Icon
                            v-if="isMobile && tag.icon"
                            :name="tag.icon"
                            size="20px"
                            class="icon"
                        />
                        {{ tag.label }}
                    </span>
                </div>
            </div>

            <div class="about__cards">
                <div
                    v-for="card in cards"
                    :key="card.title"
                    :class="['card', card.color]"
                >
                    <div class="card__icon-box">
                        <Icon :name="card.icon" size="26px" />
                    </div>

                    <strong>{{ card.title }}</strong>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

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
    {
        title: "BACKEND & APIs",
        icon: "i-lucide:server",
        color: "red",
    },
    {
        title: "CLOUD & DEVOPS",
        icon: "i-lucide:cloud",
        color: "blue",
    },
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

onMounted(() => {
    const checkScreen = () => {
        isMobile.value = window.innerWidth <= 480;
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
});
</script>

<style scoped>
.about {
    position: relative;
    padding: 6rem 4rem;
    background: #f2f2f2;
    overflow: hidden;
    color: #111;
}

.about__title-wrapper {
    display: flex;
    justify-content: center;
    margin-bottom: 7rem;
}

.sticker {
    position: relative;
}

.sticker-black {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    border: 3px solid rgb(255, 77, 77);
    font-size: 2.5rem;
    font-weight: 900;
    background: #111;
    color: white;
    padding: 0.7rem 1.6rem;
    transform: rotate(-2deg);
    box-shadow: 6px 6px 0 #000;
}

.sticker-yellow {
    position: absolute;
    top: -18px;
    left: -5px;
    width: 110px;
    height: 30px;
    background: #ffd500de;
    transform: rotate(-12deg);
    z-index: 1;
}

.sticker-blue {
    position: absolute;
    bottom: -12px;
    right: -8px;
    width: 100px;
    height: 25px;
    transform: rotate(15deg);
    background: #2978ffe0;
    z-index: 1;
}

.sticker-black .highlight {
    color: #ff3c3c;
}

.about__content {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 3rem;
    margin-top: 3rem;
    align-items: start;
}

.about__box {
    border: 3px solid black;
    padding: 2rem;
    box-shadow: 8px 7px 0 #000;
    position: relative;
    background: white;
}

.about__box::before,
.about__box::after {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid black;
}

.about__box::before {
    top: -10px;
    left: -10px;
    background: #00e676;
}

.about__box::after {
    top: -10px;
    right: -12px;
    background: #ff5252;
}

.about__box p {
    font-size: 1.1rem;
    line-height: 1.6;
}

.highlight-text {
    background: yellow;
    padding: 0 4px;
}

.comment {
    margin-top: 1.5rem;
    color: #444;
}

.tags {
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;
}

.tag {
    padding: 0.3rem 0.6rem;
    font-weight: bold;
    border: 2px solid black;
}

.tag.yellow {
    background: #ffd600;
}
.tag.blue {
    background: #2979ff;
    color: white;
}
.tag.red {
    background: #ff5252;
    color: white;
}

.about__cards {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
}

.card {
    border: 3px solid black;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    box-shadow: 8px 8px 0 #000;
    transition:
        transform 0.15s ease,
        box-shadow 0.15s ease;
    min-height: 140px;
}

.card__icon-box {
    width: 50px;
    height: 50px;
    background: #fff;
    border: 3px solid #000;
    box-shadow: 6px 6px 0 #000;

    display: flex;
    align-items: center;
    justify-content: center;
}

.card strong {
    font-weight: bold;
    font-size: 1.2em;
    -webkit-text-stroke: 0.3px black;
}

.card:hover {
    transform: translate(4px, 4px);
    box-shadow: 4px 4px 0 #000;
}

.card:hover .card__icon-box {
    transform: translate(3px, 3px);
    box-shadow: 3px 3px 0 #000;
    transition: 0.15s ease;
}

.card.yellow {
    background: #ffd600;
}
.card.red {
    background: #ff8a80;
}
.card.blue {
    background: #82b1ff;
}
.card.green {
    background: #69f0ae;
}

@media (max-width: 1024px) {
    .about {
        padding: 4rem 2rem;
    }

    .about__content {
        gap: 2rem;
    }

    .sticker-black {
        font-size: 2rem;
    }

    .about__content {
        grid-template-columns: 1fr;
    }

    .about__cards {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .about {
        padding: 3rem 1.5rem;
    }

    .about__content {
        grid-template-columns: 1fr;
    }

    .about__cards {
        grid-template-columns: repeat(2, 1fr);
    }

    .sticker-black {
        font-size: 1.6rem;
        padding: 0.6rem 1.2rem;
    }

    .about__box {
        padding: 1.5rem;
    }

    .about__box p {
        font-size: 1rem;
    }

    .card {
        padding: 1.5rem;
    }

    .sticker-blue {
        bottom: -16px;
        right: -12px;
        width: 90px;
        height: 25px;
    }
}

@media (max-width: 480px) {
    .sticker-black {
        font-size: 1.3rem;
        text-align: center;
    }

    .tags {
        flex-wrap: wrap;
    }

    .tag {
        font-size: 0.8rem;
    }

    .sticker-yellow {
        top: -18px;
        left: -5px;
        width: 100px;
        height: 28px;
    }

    .sticker-blue {
        bottom: -16px;
        right: -12px;
        width: 70px;
        height: 25px;
    }

    .about__cards {
        display: none;
    }
}
</style>
