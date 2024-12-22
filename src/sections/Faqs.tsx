'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { twMerge } from "tailwind-merge";
import Tag from "@/components/Tag";

const faqs = [
    {
        question: "How is ZoomsterHub different from other entertainment platforms?",
        answer: "ZoomsterHub stands out by offering a unique blend of entertainment, career growth resources, business solutions, and exclusive OTT content. Our platform adapts to your interests, providing a personalized experience that goes beyond traditional streaming services.",
    },
    {
        question: "Is ZoomsterHub available in my country?",
        answer: "ZoomsterHub is available in 193 countries worldwide. We've worked hard to ensure our content and services are accessible to a global audience, with localized options where possible.",
    },
    {
        question: "How do you handle content recommendations?",
        answer: "ZoomsterHub uses advanced AI algorithms to analyze your viewing habits, career interests, and business needs. This allows us to provide highly personalized recommendations across all our offerings, ensuring you always find relevant and engaging content.",
    },
    {
        question: "Can I access ZoomsterHub offline?",
        answer: "Yes! ZoomsterHub offers robust offline capabilities. You can download select content for offline viewing, and our business and career tools have offline modes so you can continue working or learning anywhere.",
    },
    {
        question: "How does ZoomsterHub support career growth?",
        answer: "ZoomsterHub integrates career development tools, online courses, and networking opportunities directly into the platform. You can access industry-specific training, attend virtual workshops, and connect with professionals in your field, all within the same ecosystem as your entertainment content.",
    },
];

export default function Faqs() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    return (
        <section className="py-24">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>FAQs</Tag>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mt-6 text-center max-w-xl mx-auto">
                    Questions? We've got <span className="text-lime-400">answers.</span>
                </h2>
                <div className="mt-12 flex-col gap-6 max-w-xl mx-auto">
                    {faqs.map((faq, faqIndex) => (
                        <motion.div
                            key={faq.question}
                            className="bg-neutral-900 rounded-2xl border border-white/10 p-6 mt-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: faqIndex * 0.1 }}
                        >
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => setSelectedIndex(selectedIndex === faqIndex ? null : faqIndex)}
                            >
                                <h3 className="font-medium">{faq.question}</h3>
                                <motion.svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className={twMerge("feather feather-plus text-lime-400 flex-shrink-0 transition duration-300")}
                                    animate={{ rotate: selectedIndex === faqIndex ? 45 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </motion.svg>
                            </div>
                            <AnimatePresence>
                                {selectedIndex === faqIndex && (
                                    <motion.div
                                        initial={{
                                            marginTop: -0,
                                            height: 0,
                                        }}
                                        animate={{
                                            marginTop: 24,
                                            height: 'auto',
                                        }}
                                        exit={{
                                            marginTop: 0,
                                            height: 0,
                                        }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-white/50">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

