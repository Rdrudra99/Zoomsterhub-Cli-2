'use client';
import { AnimationPlaybackControls, motion, useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function CallToAction() {
    const [isHovered, setIsHovered] = useState(false);
    const animation = useRef<AnimationPlaybackControls>();
    const [scope, animate] = useAnimate();
    useEffect(() => {
        animation.current = animate(scope.current,
            {
                x: "-50%",
            },
            {
                repeat: Infinity,
                duration: 30,
                ease: "linear",
            }
        )
    }, []);

    useEffect(() => {
        if (animation.current) {
            if (isHovered) {
                animation.current.speed = 0.5;
            } else {
                animation.current.speed = 1;
            }
        }
    }, [isHovered]);

    return (
        <section className="py-24 overflow-hidden">
            <div className="p-4 flex overflow-x-clip">
                <motion.div
                    ref={scope}
                    className="flex flex-none gap-16 pr-16 text-7xl font-medium group cursor-pointer"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-16 whitespace-nowrap"
                        >
                            <span className="text-lime-400">&#10038;</span>
                            <span className="group-hover:text-lime-400">Connect with us to Grow !</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
