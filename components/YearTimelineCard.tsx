import type { ReactNode } from "react";
import { Alert, Card, Col, Timeline, Typography } from "antd";
import type { ColProps } from "antd";
import type { TimelineItemProps } from "antd";
import { useTimelinePrintChunks } from "../hooks/useTimelinePrintChunks";

const { Title, Text } = Typography;

type YearTimelineCardProps = {
    sectionTitle: string;
    title: ReactNode;
    alertMessage: string;
    items: TimelineItemProps[];
    colProps?: ColProps;
    extra?: ReactNode;
    isFirstPrintSection?: boolean;
};

export default function YearTimelineCard({
    sectionTitle,
    title,
    alertMessage,
    items,
    colProps = { span: 24, lg: 12 },
    extra,
    isFirstPrintSection = false,
}: YearTimelineCardProps) {
    const { cardRef, chunks } = useTimelinePrintChunks(items, {
        isFirstPrintSection,
    });

    const alert = (
        <Alert
            message={alertMessage}
            type="info"
            showIcon
            style={{ marginBottom: "24px" }}
        />
    );

    return (
        <Col {...colProps}>
            <div ref={cardRef} className="screen-only-year-card">
                <Card title={title} extra={extra} bordered={false}>
                    {alert}
                    <Timeline mode="alternate" items={items} />
                </Card>
            </div>

            <div className="print-year-section print-only-year-cards">
                {chunks.map((chunkItems, pageIndex) => (
                    <Card
                        key={`${sectionTitle}-${pageIndex}`}
                        className={[
                            "print-year-card",
                            isFirstPrintSection && pageIndex === 0
                                ? "print-year-card--lead"
                                : "",
                        ]
                            .filter(Boolean)
                            .join(" ")}
                        title={
                            pageIndex === 0 ? (
                                title
                            ) : (
                                <Title level={4} style={{ margin: "0" }}>
                                    {sectionTitle}{" "}
                                    <Text type="secondary">(계속)</Text>
                                </Title>
                            )
                        }
                        extra={pageIndex === 0 ? extra : undefined}
                        bordered={false}
                    >
                        {pageIndex === 0 ? alert : null}
                        <Timeline mode="alternate" items={chunkItems} />
                    </Card>
                ))}
            </div>
        </Col>
    );
}
