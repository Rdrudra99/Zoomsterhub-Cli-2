"use client";
import Image from "next/image";
import AnimationContainer from '@/components/animation-container';
import MaxWidthWrapper from "@/components/max-width-wrapper";
import React from 'react';
import {
 DollarSign,
 MessagesSquare,
 PersonStanding,
 Timer,
 Zap,
 ZoomIn,
} from "lucide-react";
const FeaturesPage = () => {
 const features = [
  {
   title: "Performance",
   description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus quae quos deserunt!",
   icon: <Timer className="size-4 md:size-6" />,
  },
  {
   title: "Innovation",
   description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus quae quos deserunt!",
   icon: <Zap className="size-4 md:size-6" />,
  },
  {
   title: "Quality",
   description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus quae quos deserunt!",
   icon: <ZoomIn className="size-4 md:size-6" />,
  },
  {
   title: "Accessibility",
   description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus quae quos deserunt!",
   icon: <PersonStanding className="size-4 md:size-6" />,
  },
  {
   title: "Affordability",
   description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus quae quos deserunt!",
   icon: <DollarSign className="size-4 md:size-6" />,
  },
  {
   title: "Customer Support",
   description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus quae quos deserunt!",
   icon: <MessagesSquare className="size-4 md:size-6" />,
  },
 ];
 return (
  <MaxWidthWrapper className="flex flex-col items-center justify-center h-full w-full md:px-12 lg:px-20 container mx-auto px-8 mb-40">
   <AnimationContainer delay={0.1}>
    <h1 className="text-2xl text-lime-400 md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight">
     Features
    </h1>
    <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
     Get in touch with us to learn more about our enterprise solutions.
    </p>
    <div className="container mx-auto max-w-screen-xl">
     <div className="mx-auto mt-14 grid gap-x-20 gap-y-8 md:grid-cols-2 md:gap-y-6 lg:mt-20">
      {features.map((feature, idx) => (
       <div className="flex gap-6 rounded-lg md:block md:p-5" key={idx}>
        <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full  md:size-12">
         {feature.icon}
        </span>
        <div>
         <h3 className="font-medium md:mb-2 md:text-xl">
          {feature.title}
         </h3>
         <p className="text-sm text-muted-foreground md:text-base">
          {feature.description}
         </p>
        </div>
       </div>
      ))}
     </div>
    </div>
   </AnimationContainer>
  </MaxWidthWrapper>
 );
};

export default FeaturesPage;
