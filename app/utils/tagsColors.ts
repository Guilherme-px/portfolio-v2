import type { Project } from "@/utils/projectsList";

type ProjectColor = Project["color"];

const tagColorOrder: ProjectColor[] = ["yellow", "red", "blue", "green"];

const tagColorClasses: Record<ProjectColor, string> = {
    yellow: "!bg-[#ffd600]",
    red: "!bg-[#ff5252]",
    blue: "!bg-[#2979ff]",
    green: "!bg-[#69f0ae]",
};

export function getTagClassByProjectColor(
    baseColor: ProjectColor | undefined,
    index: number,
) {
    const safeBaseColor = baseColor ?? "yellow";
    const startIndex = tagColorOrder.indexOf(safeBaseColor);
    const safeStartIndex = startIndex >= 0 ? startIndex : 0;
    const color =
        tagColorOrder[(safeStartIndex + index) % tagColorOrder.length] ??
        "yellow";

    return tagColorClasses[color];
}
