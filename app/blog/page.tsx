"use client";

import { useState } from "react";

type BlogCard = {
    id: number;
    title: string;
    summary: string;
    description: string;
};

const BLOG_CARDS: BlogCard[] = [
    {
        id: 1,
        title: "Placeholder Title 1",
        summary: "Short preview for card one.",
        description:
            "This is a longer placeholder description for card one. It can include a full paragraph of details about the blog post.",
    },
    {
        id: 2,
        title: "Placeholder Title 2",
        summary: "Short preview for card two.",
        description:
            "This is a longer placeholder description for card two. It can include a full paragraph of details about the blog post.",
    },
    {
        id: 3,
        title: "Placeholder Title 3",
        summary: "Short preview for card three.",
        description:
            "This is a longer placeholder description for card three. It can include a full paragraph of details about the blog post.",
    },
];

const PLACEHOLDER_IMAGE = "https://placehold.co/600x400?text=Blog+Image";

export default function Blog() {
    const [activeCard, setActiveCard] = useState<BlogCard | null>(null);

    return (
        <main style={{ padding: "32px" }}>
            <div
                style={{
                    display: "grid",
                    gap: "20px",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                }}
            >
                {BLOG_CARDS.map((card) => (
                    <button
                        key={card.id}
                        type="button"
                        onClick={() => setActiveCard(card)}
                        style={{
                            textAlign: "left",
                            padding: "18px",
                            borderRadius: "12px",
                            border: "1px solid #e5e7eb",
                            background: "#ffffff",
                            boxShadow: "0 4px 12px rgba(15, 23, 42, 0.08)",
                            cursor: "pointer",
                        }}
                        aria-haspopup="dialog"
                        aria-expanded={activeCard?.id === card.id}
                    >
                        <img
                            src={PLACEHOLDER_IMAGE}
                            alt="Blog placeholder"
                            style={{
                                width: "100%",
                                height: "auto",
                                aspectRatio: "1 / 1",
                                objectFit: "cover",
                                borderRadius: "10px",
                                marginBottom: "12px",
                            }}
                        />
                        <h2 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "8px" }}>
                            {card.title}
                        </h2>
                        <p style={{ color: "#475569", lineHeight: 1.5 }}>{card.summary}</p>
                    </button>
                ))}
            </div>

            {activeCard && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="blog-modal-title"
                    style={{
                        position: "fixed",
                        inset: 0,
                        background: "rgba(15, 23, 42, 0.6)",
                        backdropFilter: "blur(8px)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "24px",
                        zIndex: 50,
                    }}
                    onClick={() => setActiveCard(null)}
                >
                    <div
                        style={{
                            maxWidth: "560px",
                            width: "100%",
                            background: "#ffffff",
                            borderRadius: "16px",
                            padding: "24px",
                            boxShadow: "0 20px 40px rgba(15, 23, 42, 0.25)",
                        }}
                        onClick={(event) => event.stopPropagation()}
                    >
                        <img
                            src={PLACEHOLDER_IMAGE}
                            alt="Blog placeholder"
                            style={{
                                width: "100%",
                                height: "auto",
                                aspectRatio: "1 / 1",
                                objectFit: "cover",
                                borderRadius: "12px",
                                marginBottom: "16px",
                            }}
                        />
                        <h2
                            id="blog-modal-title"
                            style={{ fontSize: "22px", fontWeight: 700, marginBottom: "12px" }}
                        >
                            {activeCard.title}
                        </h2>
                        <p style={{ color: "#334155", lineHeight: 1.6, marginBottom: "20px" }}>
                            {activeCard.description}
                        </p>
                        <button
                            type="button"
                            onClick={() => setActiveCard(null)}
                            style={{
                                padding: "10px 16px",
                                borderRadius: "8px",
                                border: "1px solid #cbd5f5",
                                background: "#0f172a",
                                color: "#ffffff",
                                cursor: "pointer",
                            }}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </main>
    );
}