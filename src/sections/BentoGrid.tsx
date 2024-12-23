"use client";
import { cn } from "@/lib/utils";
import React from "react";
import {
 IconCalendarEvent,
 IconDeviceTv,
 IconBrowser,
 IconDeviceMobile,
 IconCode,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Tag from "@/components/Tag";

export default function CustomBentoGrid() {
 return (
  <section className="py-24">
   <div className="container mx-auto">
    <div className="flex justify-center">
     <Tag>Our Services</Tag>
    </div>
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mt-6 text-center max-w-xl mx-auto text-white">
     Innovative <span className="text-lime-400">Solutions</span> for Your Business
    </h2>
    <BentoGrid className="mx-auto md:auto-rows-[20rem] mt-12 bg-black">
     {items.map((item, i) => (
      <BentoGridItem
       key={i}
       title={item.title}
       description={item.description}
       header={item.header}
       className={cn("[&>p:text-lg]", item.className)}
       icon={item.icon}
      />
     ))}
    </BentoGrid>
   </div>
  </section>
 );
}

const SkeletonOne = () => {
 const variants = {
  initial: {
   x: 0,
  },
  animate: {
   x: 10,
   rotate: 5,
   transition: {
    duration: 0.2,
   },
  },
 };
 const variantsSecond = {
  initial: {
   x: 0,
  },
  animate: {
   x: -10,
   rotate: -5,
   transition: {
    duration: 0.2,
   },
  },
 };

 return (
  <motion.div
   initial="initial"
   whileHover="animate"
   className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
  >
   <motion.div
    variants={variants}
    className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2  dark:bg-black"
   >
    <div className="h-6 w-6 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex-shrink-0" />
    <div className="w-full  h-4 rounded-full dark:bg-neutral-900" />
   </motion.div>
   <motion.div
    variants={variantsSecond}
    className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto  bg-black"
   >
    <div className="w-full  h-4 rounded-full bg-neutral-900" />
    <div className="h-6 w-6 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex-shrink-0" />
   </motion.div>
   <motion.div
    variants={variants}
    className="flex flex-row rounded-full border border-neutral-100 border-white/[0.2] p-2 items-center space-x-2  bg-black"
   >
    <div className="h-6 w-6 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex-shrink-0" />
    <div className="w-full  h-4 rounded-full bg-neutral-900" />
   </motion.div>
  </motion.div>
 );
};

const SkeletonTwo = () => {
 const variants = {
  initial: {
   width: 0,
  },
  animate: {
   width: "100%",
   transition: {
    duration: 0.2,
   },
  },
  hover: {
   width: ["0%", "100%"],
   transition: {
    duration: 2,
   },
  },
 };
 const arr = new Array(6).fill(0);
 return (
  <motion.div
   initial="initial"
   animate="animate"
   whileHover="hover"
   className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
  >
   {arr.map((_, i) => (
    <motion.div
     key={"skelenton-two" + i}
     variants={variants}
     style={{
      maxWidth: Math.random() * (100 - 40) + 40 + "%",
     }}
     className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2  dark:bg-black w-full h-4"
    ></motion.div>
   ))}
  </motion.div>
 );
};

const SkeletonThree = () => {
 const variants = {
  initial: {
   backgroundPosition: "0 50%",
  },
  animate: {
   backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
  },
 };
 return (
  <motion.div
   initial="initial"
   animate="animate"
   variants={variants}
   transition={{
    duration: 5,
    repeat: Infinity,
    repeatType: "reverse",
   }}
   className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
  >
   <motion.div className="h-full w-full rounded-lg">
    <div className="h-full w-full bg-gray-800 rounded-lg p-4 border border-gray-700 flex flex-col items-center justify-center">
     <IconBrowser className="h-10 w-10 text-blue-400" />
     <p className="sm:text-sm text-xs text-center font-semibold text-gray-300 mt-4">
      Responsive Web Design
     </p>
     <p className="border border-blue-500 bg-blue-900/20 text-blue-400 text-xs rounded-full px-2 py-0.5 mt-4">
      Modern
     </p>
    </div>
   </motion.div>
  </motion.div>
 );
};

const SkeletonFour = () => {
 const first = {
  initial: {
   x: 20,
   rotate: -5,
  },
  hover: {
   x: 0,
   rotate: 0,
  },
 };
 const second = {
  initial: {
   x: -20,
   rotate: 5,
  },
  hover: {
   x: 0,
   rotate: 0,
  },
 };
 return (
  <motion.div
   initial="initial"
   animate="animate"
   whileHover="hover"
   className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
  >
   <motion.div
    variants={first}
    className="h-full w-1/3 rounded-2xl bg-gray-800 p-4 border border-gray-700 flex flex-col items-center justify-center"
   >
    <IconBrowser className="h-10 w-10 text-blue-400" />
    <p className="sm:text-sm text-xs text-center font-semibold text-gray-300 mt-4">
     Responsive Web Design
    </p>
    <p className="border border-blue-500 bg-blue-900/20 text-blue-400 text-xs rounded-full px-2 py-0.5 mt-4">
     Modern
    </p>
   </motion.div>
   <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-gray-800 p-4 border border-gray-700 flex flex-col items-center justify-center">
    <IconDeviceMobile className="h-10 w-10 text-green-400" />
    <p className="sm:text-sm text-xs text-center font-semibold text-gray-300 mt-4">
     Native App Development
    </p>
    <p className="border border-green-500 bg-green-900/20 text-green-400 text-xs rounded-full px-2 py-0.5 mt-4">
     Efficient
    </p>
   </motion.div>
   <motion.div
    variants={second}
    className="h-full w-1/3 rounded-2xl bg-gray-800 p-4 border border-gray-700 flex flex-col items-center justify-center"
   >
    <IconCode className="h-10 w-10 text-purple-400" />
    <p className="sm:text-sm text-xs text-center font-semibold text-gray-300 mt-4">
     Custom Software Solutions
    </p>
    <p className="border border-purple-500 bg-purple-900/20 text-purple-400 text-xs rounded-full px-2 py-0.5 mt-4">
     Tailored
    </p>
   </motion.div>
  </motion.div>
 );
};

const SkeletonFive = () => {
 const variants = {
  initial: {
   x: 0,
  },
  animate: {
   x: 10,
   rotate: 5,
   transition: {
    duration: 0.2,
   },
  },
 };
 const variantsSecond = {
  initial: {
   x: 0,
  },
  animate: {
   x: -10,
   rotate: -5,
   transition: {
    duration: 0.2,
   },
  },
 };

 return (
  <motion.div
   initial="initial"
   whileHover="animate"
   className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
  >
   <motion.div
    variants={variants}
    className="flex flex-row rounded-2xl border border-gray-700 p-2 items-start space-x-2 bg-gray-800"
   >
    <IconCalendarEvent className="h-10 w-10 text-yellow-400" />
    <p className="text-xs text-gray-300">
     Our event management system streamlines planning and execution...
    </p>
   </motion.div>
   <motion.div
    variants={variantsSecond}
    className="flex flex-row rounded-full border border-gray-700 p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-gray-800"
   >
    <p className="text-xs text-gray-300">Seamless event experiences.</p>
    <div className="h-6 w-6 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex-shrink-0" />
   </motion.div>
  </motion.div>
 );
};

const items = [
 {
  title: "Event Organization",
  description: (
   <span className="text-sm text-gray-300">
    Streamline your events with our cutting-edge management solutions.
   </span>
  ),
  header: <SkeletonOne />,
  className: "md:col-span-1",
  icon: <IconCalendarEvent className="h-4 w-4 text-yellow-400" />,
 },
 {
  title: "OTT Platform Development",
  description: (
   <span className="text-sm text-gray-300">
    Build robust and scalable OTT platforms for seamless content delivery.
   </span>
  ),
  header: <SkeletonTwo />,
  className: "md:col-span-1",
  icon: <IconDeviceTv className="h-4 w-4 text-red-400" />,
 },
 {
  title: "Web Development",
  description: (
   <span className="text-sm text-gray-300">
    Create stunning, responsive websites tailored to your business needs.
   </span>
  ),
  header: <SkeletonThree />,
  className: "md:col-span-1",
  icon: <IconBrowser className="h-4 w-4 text-blue-400" />,
 },
 {
  title: "App Development",
  description: (
   <span className="text-sm text-gray-300">
    Develop powerful, user-friendly mobile applications for iOS and Android.
   </span>
  ),
  header: <SkeletonFour />,
  className: "md:col-span-2",
  icon: <IconDeviceMobile className="h-4 w-4 text-green-400" />,
 },
 {
  title: "Custom Software Solutions",
  description: (
   <span className="text-sm text-gray-300">
    Tailor-made software solutions to address your unique business challenges.
   </span>
  ),
  header: <SkeletonFive />,
  className: "md:col-span-1",
  icon: <IconCode className="h-4 w-4 text-purple-400" />,
 },
];

