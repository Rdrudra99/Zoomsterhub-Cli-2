'use client';
import { motion } from "framer-motion";

export default function CallToAction() {
    return (
        <section className="py-24 overflow-hidden">
            <div className="p-4 flex">
                <motion.div
                    className="flex flex-none gap-16 text-7xl font-medium"
                    animate={{
                        translateX: "-50%"
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                    }}
                >
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-16 whitespace-nowrap"
                        >
                            <span className="text-lime-400">&#10038;</span>
                            <span>Connect with us to Grow !</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
