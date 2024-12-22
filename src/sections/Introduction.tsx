'use client';

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";
import Tag from "@/components/Tag";

const text = "ZoomsterHub: Unlock limitless entertainment, career growth, business solutions, and exclusive OTT content in 193 countries";
const words = text.split(' ');

export default function Introduction() {
    const scrollTarget = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: scrollTarget,
        offset: ['start end', 'end start'],
    });

    const wordProgress = useTransform(scrollYProgress, [0, 1], [0, words.length]);

    return (
        <section ref={scrollTarget} className="py-28 lg:py-40">
            <div className="container">
                <div className="sticky top-20">
                    <div className="flex justify-center">
                        <Tag>Introducing ZoomsterHub</Tag>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl text-center font-medium mt-10 md:mt-20 leading-tight">
                        <span className="block mb-4">Your entertainment and growth journey</span>
                        <span className="text-white/15 inline-flex flex-wrap justify-center">
                            {words.map((word, i) => (
                                <motion.span
                                    key={i}
                                    className="mr-2 mb-2"
                                    style={{
                                        color: useTransform(
                                            wordProgress,
                                            [i - 0.5, i],
                                            ["rgba(255,255,255,0.15)", "rgba(255,255,255,1)"]
                                        )
                                    }}
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </span>
                        <span className="text-lime-400 block mt-4">That&apos;s why we built ZoomsterHub.</span>
                    </h1>
                </div>
                <div className="h-[150vh]"></div>
            </div>
        </section>
    )
}

