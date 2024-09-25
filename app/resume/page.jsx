"use client";

import { 
  FaHtml5, 
  FaCss3, 
  FaJs, 
  FaReact, 
  FaFigma, 
  FaNodeJs 
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// about data
const about = {
  title: "About me",
  description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Tom Stannard"

    },
    {
      fieldName: "Phone",
      fieldValue: "0402 824 763"

    },
    {
      fieldName: "Experience",
      fieldValue: "3+ Years"

    },
    {
      fieldName: "Email",
      fieldValue: "tom_work@live.com"

    },
    {
      fieldName: "Github",
      fieldValue: "githublink"

    },
    {
      fieldName: "Name",
      fieldValue: "Tom Stannard"

    },
    {
      fieldName: "Name",
      fieldValue: "Tom Stannard"

    },
  ]
}

// experience data 
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description: "Lorem ipsum dolor sit amet",
  items: [
    {
      company: "Blah",
      position: "Blah",
      duration: "Blah Years",
    },
    {
      company: "Blah",
      position: "Blah",
      duration: "Blah Years",
    },
    {
      company: "Blah",
      position: "Blah",
      duration: "Blah Years",
    },
  ],
};

// education data 
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description: "Lorem ipsum dolor sit amet",
  items: [
    {
      institution: "Blah",
      degree: "Blah",
      duration: "Blah Years",
    },
    {
      institution: "Blah",
      degree: "Blah",
      duration: "Blah Years",
    },
    {
      institution: "Blah",
      degree: "Blah",
      duration: "Blah Years",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description: "blah",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ]
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div 
      initial={{opacity: 0}} 
      animate={{
        opacity: 1, 
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs>
          <TabsList>
            <TabsTrigger>Experience</TabsTrigger>
            <TabsTrigger>Education</TabsTrigger>
            <TabsTrigger>Skills</TabsTrigger>
            <TabsTrigger>About me</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;