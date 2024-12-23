'use client';
import avatar1 from '@/assets/images/avatar-1.png';
import avatar2 from '@/assets/images/avatar-2.png';
import avatar3 from '@/assets/images/avatar-3.png';
import avatar4 from '@/assets/images/avatar-4.png';
import avatar5 from '@/assets/images/avatar-5.png';
import avatar6 from '@/assets/images/avatar-6.png';
import avatar7 from '@/assets/images/avatar-7.png';
import avatar8 from '@/assets/images/avatar-8.png';
import avatar9 from '@/assets/images/avatar-9.png';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';
import React from 'react';
import Tag from '@/components/Tag';

// const testimonials = [
//  {
//   text: 'As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.',
//   imageSrc: avatar1.src,
//   name: 'Jamie Rivera',
//   username: '@jamietechguru00',
//  },
//  {
//   text: "Our team's productivity has skyrocketed since we started using this tool. ",
//   imageSrc: avatar2.src,
//   name: 'Josh Smith',
//   username: '@jjsmith',
//  },
//  {
//   text: 'This app has completely transformed how I manage my projects and deadlines.',
//   imageSrc: avatar3.src,
//   name: 'Morgan Lee',
//   username: '@morganleewhiz',
//  },
//  {
//   text: 'I was amazed at how quickly we were able to integrate this app into our workflow.',
//   imageSrc: avatar4.src,
//   name: 'Casey Jordan',
//   username: '@caseyj',
//  },
//  {
//   text: 'Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.',
//   imageSrc: avatar5.src,
//   name: 'Taylor Kim',
//   username: '@taylorkimm',
//  },
//  {
//   text: 'The customizability and integration capabilities of this app are top-notch.',
//   imageSrc: avatar6.src,
//   name: 'Riley Smith',
//   username: '@rileysmith1',
//  },
//  {
//   text: 'Adopting this app for our team has streamlined our project management and improved communication across the board.',
//   imageSrc: avatar7.src,
//   name: 'Jordan Patels',
//   username: '@jpatelsdesign',
//  },
//  {
//   text: 'With this app, we can easily assign tasks, track progress, and manage documents all in one place.',
//   imageSrc: avatar8.src,
//   name: 'Sam Dawson',
//   username: '@dawsontechtips',
//  },
//  {
//   text: 'Its user-friendly interface and robust features support our diverse needs.',
//   imageSrc: avatar9.src,
//   name: 'Casey Harper',
//   username: '@casey09',
//  },
// ];

const testimonials = [
  {
    text: 'Zoomsterhub has revolutionized the way our team collaborates. It’s the tool we didn’t know we needed.',
    imageSrc: avatar1.src,
    name: 'Aarav Gupta',
    username: '@aaravtech',
  },
  {
    text: "The seamless integration and intuitive design of Zoomsterhub has greatly improved our workflow and efficiency.",
    imageSrc: avatar2.src,
    name: 'Priya Sharma',
    username: '@priyasharma_x',
  },
  {
    text: 'Managing multiple projects has never been easier. Zoomsterhub’s features keep everything organized and on track.',
    imageSrc: avatar3.src,
    name: 'Nikhil Mehta',
    username: '@nikhil_m',
  },
  {
    text: 'We’ve seen a significant boost in productivity since adopting Zoomsterhub. Highly recommended for any team!',
    imageSrc: avatar4.src,
    name: 'Riya Patel',
    username: '@riya_works',
  },
  {
    text: 'Zoomsterhub has simplified the process of event planning and coordination for our team. All-in-one solution!',
    imageSrc: avatar5.src,
    name: 'Karan Kumar',
    username: '@karanktech',
  },
  {
    text: 'The customization options and integration with other tools are fantastic. Zoomsterhub fits perfectly into our workflow.',
    imageSrc: avatar6.src,
    name: 'Ananya Desai',
    username: '@ananyadesai',
  },
  {
    text: 'Zoomsterhub has completely streamlined our project management process. It’s made communication and task tracking so much easier.',
    imageSrc: avatar7.src,
    name: 'Vikram Singh',
    username: '@vikramsingh98',
  },
  {
    text: 'With Zoomsterhub, we can manage everything from task assignments to document sharing in one easy-to-use platform.',
    imageSrc: avatar8.src,
    name: 'Saanvi Yadav',
    username: '@saanvi.y',
  },
  {
    text: 'Zoomsterhub’s user-friendly interface and powerful features have supported our team’s growing needs perfectly.',
    imageSrc: avatar9.src,
    name: 'Rohan Joshi',
    username: '@rohanj_tech',
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{ translateY: '-50%' }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
        className={twMerge('flex flex-col pt-10', props.className)}
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, imageSrc, name, username }) => (
              <div key={imageSrc} className="p-10 border border-solid border-[#222222]/10 rounded-3xl  bg-neutral-900 max-w-sm w-full my-5" style={{
                boxShadow:
                  "0px 0px 0px 1px rgba(0,0,0,0.06), 0px 1px 1px -0.5px rgba(0,0,0,0.06), 0px 3px 3px -1.5px rgba(0,0,0,0.06), 0px 6px 6px -3px rgba(0,0,0,0.06), 0px 12px 12px -6px rgba(0,0,0,0.06), 0px 24px 24px -12px rgba(0,0,0,0.06)",
              }}>
                <div className='text-white/70'>{text}</div>
                <div className="flex items-center gap-2 mt-5">
                  <Image
                    src={imageSrc}
                    alt={name}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full"
                  />
                  <div className="flex flex-col">
                    <div className="font-semibold text-white/50 tracking-tight leading-5">
                      {name}
                    </div>
                    <div className="leading-5 text-white/50 tracking-tight">{username}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="container mx-auto">
        {/* <h2 className="text-4xl font-medium mt-6 text-center">
     What our users are <span className='text-lime-400'>
      saying
     </span>
    </h2> */}
        <div className="flex justify-center">
          <Tag>
            Testimonials
          </Tag>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mt-6 text-center max-w-xl mx-auto">
          What users say about <span className="text-lime-400">Zoomsterhub</span>
        </h2>
        <p className="text-center text-white/50 text-xl mt-12">
          From intuitive design to powerful features, our app has become an
          essential tool for users around the world.
        </p>
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} className="block" />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};