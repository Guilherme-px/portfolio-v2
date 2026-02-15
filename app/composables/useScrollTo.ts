export function useScrollTo() {
    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: "smooth" });
    };

    return { scrollTo };
}
