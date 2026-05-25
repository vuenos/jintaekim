import {
    useCallback,
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
} from "react";
import type { TimelineItemProps } from "antd";
import {
    getPrintablePageHeightPx,
    splitIndicesByHeights,
} from "../lib/printPageHeight";

const CARD_BODY_PADDING_PX = 28;
const CONTINUATION_HEADER_PX = 72;
const FIRST_PAGE_SAFETY_BUFFER_PX = 64;

type UseTimelinePrintChunksOptions = {
    /** 프로필·스킬 카드와 같은 페이지에 붙는 첫 년도 섹션 */
    isFirstPrintSection?: boolean;
};

export function useTimelinePrintChunks(
    items: TimelineItemProps[],
    options: UseTimelinePrintChunksOptions = {},
) {
    const { isFirstPrintSection = false } = options;
    const cardRef = useRef<HTMLDivElement>(null);
    const [chunks, setChunks] = useState<TimelineItemProps[][]>([items]);

    const measure = useCallback(() => {
        const cardEl = cardRef.current;
        if (!cardEl) {
            setChunks([items]);
            return;
        }

        const headEl = cardEl.querySelector(".ant-card-head");
        const alertEl = cardEl.querySelector(".ant-alert");
        const timelineItems = cardEl.querySelectorAll(".ant-timeline-item");

        if (timelineItems.length === 0) {
            setChunks([items]);
            return;
        }

        const pageHeight = getPrintablePageHeightPx();
        const headH = headEl?.getBoundingClientRect().height ?? 0;
        const alertH = alertEl?.getBoundingClientRect().height ?? 0;
        let firstPageCapacity =
            pageHeight - headH - alertH - CARD_BODY_PADDING_PX;

        if (isFirstPrintSection) {
            const profileCard = document.querySelector(".print-profile-card");
            if (profileCard) {
                firstPageCapacity -=
                    profileCard.getBoundingClientRect().height + 16;
            }
            firstPageCapacity -= FIRST_PAGE_SAFETY_BUFFER_PX;
        }
        const nextPageCapacity =
            pageHeight - CONTINUATION_HEADER_PX - CARD_BODY_PADDING_PX;

        const itemHeights = Array.from(timelineItems).map(
            (el) => el.getBoundingClientRect().height,
        );

        const pageIndices = splitIndicesByHeights(
            itemHeights,
            Math.max(firstPageCapacity, 200),
            Math.max(nextPageCapacity, 200),
        );

        setChunks(
            pageIndices.map((indices) =>
                indices.map((index) => items[index]),
            ),
        );
    }, [items, isFirstPrintSection]);

    useLayoutEffect(() => {
        measure();
    }, [measure]);

    useEffect(() => {
        window.addEventListener("resize", measure);
        const onBeforePrint = () => measure();
        window.addEventListener("beforeprint", onBeforePrint);

        const media = window.matchMedia("print");
        const onPrintChange = (event: MediaQueryListEvent) => {
            if (event.matches) {
                measure();
            }
        };
        media.addEventListener("change", onPrintChange);

        const timeout = window.setTimeout(measure, 400);

        return () => {
            window.removeEventListener("resize", measure);
            window.removeEventListener("beforeprint", onBeforePrint);
            media.removeEventListener("change", onPrintChange);
            window.clearTimeout(timeout);
        };
    }, [measure]);

    return { cardRef, chunks };
}
