/** A4 printable area height in CSS pixels (8mm margins). */
export function getPrintablePageHeightPx(): number {
    const pageHeightMm = 297;
    const marginMm = 8;
    const printableMm = pageHeightMm - marginMm * 2;
    const mmToPx = 96 / 25.4;
    return Math.floor(printableMm * mmToPx) - 32;
}

export function splitIndicesByHeights(
    heights: number[],
    firstPageCapacity: number,
    nextPageCapacity: number,
): number[][] {
    if (heights.length === 0) {
        return [];
    }

    const pages: number[][] = [];
    let current: number[] = [];
    let used = 0;
    let capacity = firstPageCapacity;

    heights.forEach((height, index) => {
        if (current.length > 0 && used + height > capacity) {
            pages.push(current);
            current = [index];
            used = height;
            capacity = nextPageCapacity;
        } else {
            current.push(index);
            used += height;
        }
    });

    if (current.length > 0) {
        pages.push(current);
    }

    return pages;
}
