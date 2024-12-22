import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
    axes: ["opsz"],
});

export const metadata: Metadata = {
    title: "Zoomsterhub || Project 12",
    description: "Created by Zoomsterhub",
    openGraph: {
        title: "Zoomsterhub || Project 12",
        description: "Created by Zoomsterhub",
        type: "website",
        locale: "en_US",
        url: "https://zoomsterhub.com",
        images: [
            {
                url: "./opengraph-image..svg",
                alt: "Zoomsterhub",
            },
        ],
    },

};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} font-sans antialiased bg-neutral-950 text-white`}
            >
                {children}
            </body>
        </html>
    );
}
