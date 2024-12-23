
import Hero from "@/sections/Hero";
import LogoTicker from "@/sections/LogoTicker";
import Introduction from "@/sections/Introduction";
import Integrations from "@/sections/Integrations";
import Testimonials from "@/sections/Testimonials";
import Faqs from "@/sections/Faqs";
import CallToAction from "@/sections/CallToAction";
import Features from "@/sections/Features";
import Perks from "@/sections/Perks";
import Navbar from "@/sections/Navbar";
import Footer from "@/components/footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <LogoTicker />
            <Introduction />
            <Features />
            <Perks />
            <Testimonials />
            <Integrations />
            <Faqs />
            <CallToAction />
            <Footer />
        </>
    )
}
