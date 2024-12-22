import Button from "@/components/Button";
import designExample1Image from '@/assets/images/design-example-1.png';
import designExample2Image from '@/assets/images/design-example-2.png';
import Pointers from "@/components/Pointer";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { cn } from "@/lib/utils";
export default function Hero() {
    return (
        <section className="py-24 overflow-x-clip">
            <div className="container">
                {/* <div className="absolute -left-32 top-16 hidden lg:block">
                    <Image src={designExample1Image} alt="Design Example 1" />
                </div>
                <div className="absolute -right-64 -top-16 hidden lg:block">
                    <Image src={designExample2Image} alt="Design Example 2" />
                </div>
                <div className="absolute left-56 top-96 hidden lg:block">
                    <Pointers name="Rdrudra99" />
                </div>
                <div className="absolute right-80 -top-4 hidden lg:block">
                    <Pointers name="Rdrudra99" color="red" />
                </div> */}
                <div className="flex justify-center">
                    <AnimatedGradientText>
                        🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
                        <span
                            className={cn(
                                `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                            )}
                        >
                            Introducing Zoomsterhub
                        </span>
                        <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                    </AnimatedGradientText>
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">
                    Zoomsterhub Create Showcase Grow
                </h1>
                <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
                    Design tools shouldn&apos;t slow you down , Layers combines powerfull features with an intuitive that eeps you in your creative flow.
                </p>
                <form className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
                    <input type="email" placeholder="Enter your email" className="bg-transparent px-4 md:flex-1 w-full" />
                    <Button variant="primary" type="submit" className="whitespace-nowrap" size="sm">Sign Up</Button>
                </form>
            </div>
        </section>
    )
}
