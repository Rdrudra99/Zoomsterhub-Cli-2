import Tag from '@/components/Tag';
import { TerminalIcon as DigitalMedia, VideoIcon as PrePostProduction, CodeIcon as WebAppDev, TvIcon as OTTPlatform } from 'lucide-react';

const features = [
    {
        icon: DigitalMedia,
        title: "Digital Media Pro",
        description:
            "Boost your online presence with expert digital marketing, video production, and website development tailored to grow your brand.",
    },
    {
        icon: PrePostProduction,
        title: "Pre-Post Production",
        description:
            "Bring your ideas to life with seamless planning, scripting, editing, and visual effects, ensuring a polished final product.",
    },
    {
        icon: WebAppDev,
        title: "Web & App Development",
        description:
            "Create engaging websites and apps that combine design, functionality, and performance for modern business success.",
    },
    {
        icon: OTTPlatform,
        title: "OTT TV Platform",
        description:
            "Revolutionize streaming with on-demand content, personalized recommendations, and seamless multi-device accessibility.",
    },
    {
        icon: DigitalMedia,
        title: "Digital Media Pro",
        description:
            "Boost your online presence with expert digital marketing, video production, and website development tailored to grow your brand.",
    },
    {
        icon: PrePostProduction,
        title: "Pre-Post Production",
        description:
            "Bring your ideas to life with seamless planning, scripting, editing, and visual effects, ensuring a polished final product.",
    },
    {
        icon: WebAppDev,
        title: "Web & App Development",
        description:
            "Create engaging websites and apps that combine design, functionality, and performance for modern business success.",
    },
    {
        icon: OTTPlatform,
        title: "OTT TV Platform",
        description:
            "Revolutionize streaming with on-demand content, personalized recommendations, and seamless multi-device accessibility.",
    },
];

const FeatureCard = ({ icon: Icon, title, description }: any) => (
    <div className="flex flex-col  py-10 relative group lg:border-b dark:border-neutral-800">
        <div className="opacity-0 group-hover:opacity-100 transition duration-200 group absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-700 dark:from-neutral-900 to-transparent hover:from-neutral-600 dark:hover:from-neutral-800 hover:to-transparent pointer-events-none"></div>
        <div className="mb-4 relative z-10 px-10">
            <Icon size={24} />
        </div>
        <div className="text-lg font-bold mb-2 relative z-10 px-10">
            <div className="absolute left-0 inset-y-0 h-6 w-1 rounded-tr-full rounded-br-full  dark:bg-neutral-700 group-hover:bg-blue-500 transition duration-200"></div>
            <span className="group-hover:translate-x-2 transition duration-200 inline-block">{title}</span>
        </div>
        <p className="text-sm text-muted dark:text-muted-dark max-w-xs mx-auto relative z-10 px-10">
            {description}
        </p>
    </div>
);

export default function FeaturesGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10">
            {features.map(({ icon, title, description }, index) => (
                <FeatureCard
                    key={index}
                    icon={icon}
                    title={title}
                    description={description}
                />
            ))}
        </div>
    );
}
