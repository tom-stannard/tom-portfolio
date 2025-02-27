"use client";

import { motion } from 'framer-motion';
import React, { useState } from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

import Link from 'next/link';
import Image from 'next/image';
import WorkSliderBtns from '@/components/WorkSliderBtns';

import thumb1 from '/public/assets/work/thumb1.png'
import thumb2 from '/public/assets/work/thumb2.png'
import thumb3 from '/public/assets/work/thumb3.png'

const projects = [
  {
    num: '01',
    category: 'Project Motoparts',
    title: 'SQL1',
    description: "End-to-end analysis of product sales data from various warehouses using SQL to transform and extract, R Studio for exploratory data analysis and Looker Studio for a robust executive sales dashboard.",
    stack: [
      {name: 'SQL'},
      {name: 'R Studio'},
      {name: 'Looker Studio'}
    ],
    image: thumb1,
    live: 'https://lookerstudio.google.com/reporting/dbc972b7-07fe-4e8b-a692-b1536b73fad9',
    github: 'https://github.com/tom-stannard/Project-Motoparts',
  },
  {
    num: '02',
    category: "Harebnb",
    title: 'Looker Studio Client Dashboard',
    description: "SQL-to-Viz example of a single-page exportable client dashboard, designed to display key performance metrics for VIP vendors and be routinely dispatched to them in pdf format via email. Built in Looker Studio and replicated in Power BI.",
    stack: [
      {name: 'SQL'},
      {name: 'Looker Studio'},
      {name: 'Power BI'}
    ],
    image: thumb2,
    live: 'https://lookerstudio.google.com/reporting/f619017b-c8f9-495f-be02-daf9a914ff64',
    github: 'https://github.com/tom-stannard/Project-Harebnb',
  },
  {
    num: '03',
    category: '(WIP) Analyzing Car Reviews with LLMs',
    title: 'Python',
    description: "Implementing pre-trained large language model (LLM) for tasks such as analyzing and classifying customer reviews on cars, responding to inquiries about available car models, and translating English text data into other languages.",
    stack: [
      {name: 'Python'}
    ],
    image: thumb3,
    live: '',
    github: '',
  },
];

const Portfolio = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  }

  return (
  <motion.section 
    initial={{opacity: 0}} 
    animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'}}} 
    className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
  >
    <div className='container mx-auto'>
      <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
        <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
          <div className='flex flex-col gap-[30px] h-[50%]'>
            {/* outline num */}
            <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
              {project.num}
            </div>
            {/* project category */}
            <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>
              {project.category}
            </h2>
            {/*project description*/}
            <p className='text-white/60'>{project.description}</p>
            {/* stack */}
            <ul className='flex gap-4'>
              {project.stack.map((item, index)=> {
                return ( 
                  <li key={index} className='text-xl text-accent'>
                    {item.name}
                    {/* remove the last comma */}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                );
              })}
            </ul>
            {/* border */}
            <div className='border border-white/20'></div>
            {/* buttons */}
            <div className='flex items-center gap-4'>
              {/* live project button*/}
              <Link href={project.live} target="_blank">
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group transition-all duration-500 hover:-rotate-45'>
                      <BsArrowUpRight className='text-white text-3xl group-hover:text-accent'/>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live Project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
              {/* github project button*/}
              <Link href={project.github} target="_blank">
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                      <BsGithub className='text-white text-3xl group-hover:text-accent'/>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Github Repository</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </div>
          </div>
        </div>
        <div className='w-full xl:w-[50%]'>
          <Swiper 
            spaceBetween={30} 
            slidesPerView={1} 
            className='xl:h-[520px] mb-12 rounded-xl'
            onSlideChange={handleSlideChange}
          >
            {projects.map((project, index)=> {
              return ( 
                <SwiperSlide key={index} className='w-full'>
                  <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20 rounded-xl'>
                    {/* overlay */}
                    <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
                    {/*image*/}
                    <div className='relative w-full h-full'>
                      <Image 
                        src={project.image} 
                        fill 
                        className='object-cover rounded-xl' 
                        alt='' 
                      />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
            {/* slider buttons */}
            <WorkSliderBtns containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none' btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" />
          </Swiper>
        </div>
      </div>
    </div>
  </motion.section>
  );
};

export default Portfolio;