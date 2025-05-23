'use client'
import quantumLogo from "@/assets/images/quantum.svg";
import acmeLogo from "@/assets/images/acme-corp.svg";
import echoValleyLogo from "@/assets/images/echo-valley.svg";
import pulseLogo from "@/assets/images/pulse.svg";
import outsideLogo from "@/assets/images/outside.svg";
import apexLogo from "@/assets/images/apex.svg";
import celestialLogo from "@/assets/images/celestial.svg";
import twiceLogo from "@/assets/images/twice.svg";
import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
    { name: "Quantum", image: quantumLogo },
    { name: "Acme Corp", image: acmeLogo },
    { name: "Echo Valley", image: echoValleyLogo },
    { name: "Pulse", image: pulseLogo },
    { name: "Outside", image: outsideLogo },
    { name: "Apex", image: apexLogo },
    { name: "Celestial", image: celestialLogo },
    { name: "Twice", image: twiceLogo },
];

export default function LogoTicker() {
    return (
        <section className="py-24 overflow-x-clip">
            <div className="container">
                <h3 className="text-center text-white/50 text-xl">
                    Already Chosen By These Market Leaders
                </h3>
                <div className="overflow-hidden mt-12 [mask-image:linear-gradient(to right, transparent, black 10%, black 90%, transparent)]">
                    <motion.div className="flex gap-14 flex-none pr-14" animate={{
                        translateX: "-50%"
                    }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "linear",
                            repeatType: "loop"
                        }}
                    >
                        {logos.map((logo, index) => (
                            <Image key={index} src={logo.image} alt={logo.name} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section >
    )
}
