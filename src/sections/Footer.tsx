import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'
import logoImage from "@/assets/images/logo.svg"
const footerLinks = [
    {
        title: "Pages",
        links: [
            { name: "All Products", href: "/products" },
            { name: "Studio", href: "/products" },
            { name: "Clients", href: "/products" },
            { name: "Pricing", href: "/products" },
            { name: "Blog", href: "/products" },
        ]
    },
    {
        title: "Socials",
        links: [
            { name: "Facebook", href: "#", icon: Facebook },
            { name: "Instagram", href: "#", icon: Instagram },
            { name: "Twitter", href: "#", icon: Twitter },
            { name: "LinkedIn", href: "#", icon: Linkedin },
        ]
    },
    {
        title: "Legal",
        links: [
            { name: "Privacy Policy", href: "/privacy-policy" },
            { name: "Terms of Service", href: "/terms-of-service" },
            { name: "Cookie Policy", href: "/cookie-policy" },
        ]
    },
]

export default function Footer() {
    return (
        <footer className=" w-full relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-sm text-neutral-600 dark:text-neutral-400">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    <div className="col-span-1 lg:col-span-2">
                        <Link href="/" className="flex items-center space-x-2 mb-4">
                            <Image
                                src={logoImage}
                                alt="Zoomsterhub"
                                className="dark:invert"
                            />
                        </Link>
                        <p className="mt-2">© {new Date().getFullYear()} Zoomsterhub. All rights reserved.</p>
                    </div>
                    {footerLinks.map((column, index) => (
                        <div key={index} className="flex flex-col space-y-4">
                            <h3 className="font-semibold text-lime-400 ">{column.title}</h3>
                            <ul className="space-y-2">
                                {column.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <Link
                                            href={link.href}
                                            className="transition-colors flex items-center"
                                        >
                                            {/* {link.icon && <link.icon className="h-4 w-4 mr-2" />} */}
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className="relative overflow-hidden py-8">
                <p className="relative z-10 text-center text-5xl md:text-7xl lg:text-9xl font-bold text-neutral-300/10 select-none pointer-events-none">
                    Zoomsterhub
                </p>
                <div className="absolute inset-0 bg-gradient-to-t from-black dark:from-white to-transparent z-0" />
            </div>
        </footer>
    )
}

