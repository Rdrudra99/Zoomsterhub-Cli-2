
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { PERKS } from "@/constants/perks";
import Tag from "@/components/Tag";


const Perks = () => {
 return (
  <section className="py-24">
   <div className="container">
    <div className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-24 w-full">
     <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
      <Tag>
       Service
      </Tag>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mt-6 text-center max-w-xl mx-auto">
       Discover the benefits of <span className="text-lime-400">Zoomsterhub</span>
      </h2>
      <p className="text-center text-white/50 text-xl mt-12">
       Explore the powerful features and advantages that Luro offer to help you grow your social media presence
      </p>
     </div>
     <div className="mt-16 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full relative">
       {PERKS.map((perk, index) => (
        <Perk key={index} index={index} {...perk} />
       ))}
      </div>
     </div>
    </div>
   </div>
  </section>
 )
};

const Perk = ({
 title,
 description,
 icon: Icon,
 index,
}: {
 title: string;
 description: string;
 icon: LucideIcon;
 index: number;
}) => {
 return (
  <div
   className={cn(
    "flex flex-col lg:border-r transform-gpu py-10 relative group/feature border-neutral-800",
    (index === 0 || index === 3) && "lg:border-l",
    index < 3 && "lg:border-b"
   )}
  >
   {index < 3 && (
    <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-80 from-lime-950/25 to-transparent pointer-events-none" />
   )}
   {index >= 3 && (
    <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-80 from-lime-950/25 to-transparent pointer-events-none" />
   )}
   <div className="group-hover/feature:-translate-y-1 transform-gpu transition-all duration-300 flex flex-col w-full">
    <div className="mb-4 relative z-10 px-10">
     <Icon strokeWidth={1.3} className="w-10 h-10 origin-left transform-gpu text-neutral-500 transition-all duration-300 ease-in-out group-hover/feature:scale-75 group-hover/feature:text-foreground" />
    </div>
    <div className="text-lg font-medium font-heading mb-2 relative z-10 px-10">
     <div className="absolute left-0 -inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-lime-600 transition-all duration-500 origin-center" />
     <span className="group-hover/feature:-translate-y- group-hover/feature:text- transition duration-500 inline-block heading">
      {title}
     </span>
    </div>
    <p className="text-sm text-neutral-300 max-w-xs relative z-10 px-10">
     {description}
    </p>
   </div>
  </div>
 );
};

export default Perks