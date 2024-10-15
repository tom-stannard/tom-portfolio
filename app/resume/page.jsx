"use client";

import { 
  FaHtml5, 
  FaCss3, 
  FaPython, 
  FaGit,
  FaSlack
} from "react-icons/fa";

import { SiPostgresql, SiR, SiPowerbi, SiLooker, SiTableau, SiMicrosoftazure, SiDatabricks, SiMicrosoftexcel, SiGooglesheets, SiMicrosoftsqlserver, SiVisualstudiocode } from "react-icons/si";

import { CgMonday } from "react-icons/cg";

// about data
const about = {
  title: "About Me",
  description: "Reach out any time for a chat.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Tom Stannard"

    },
    {
      fieldName: "Email",
      fieldValue: "tom_work@live.com"

    },
    {
      fieldName: "Phone",
      fieldValue: "0402 824 763"

    },
    {
      fieldName: "Github",
      fieldValue: "github.com/tom-stannard"

    },
    {
      fieldName: "Experience",
      fieldValue: "3+ Years"

    },
    {
      fieldName: "LinkedIn",
      fieldValue: "linkedin.com/in/tomstannard"

    },
  ]
}

// experience data 
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description: "I have worked in IT for over 6 years, with 3+ years as a Senior Data & Operations Analyst.",
  items: [
    {
      company: "Share with Oscar",
      position: "Senior Data & Operations Analyst",
      duration: "3+ Years (Present)",
    },
    {
      company: "Tech2",
      position: "IT Support Technician",
      duration: "2 Years",
    },
    {
      company: "Freelance",
      position: "Wordpress Developer",
      duration: "4 Years",
    },
  ],
};

// education data 
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description: "I am committed to lifelong learning. My studies continue to this day via the Datacamp platform.",
  items: [
    {
      institution: "Datacamp",
      degree: "47 Courses - Data Analysis & Engineering",
      duration: "2+ Years (In Progress)",
    },
    {
      institution: "UTS",
      degree: "Bachelor of Science Information Technology",
      duration: "4 Years",
    },
    {
      institution: "TAFE NSW",
      degree: "Cert III Telecommunications Technology",
      duration: "1 Years",
    },
    {
      institution: "TAFE NSW",
      degree: "Cert III Information & Digital Technology",
      duration: "2 Years",
    },
  ],
};

// skills data
const skills = {
  title: "My Tech Stack",
  description: "See the tools I've mastered for data extraction, cleaning, transformation, visualisation and workflow management.",
  skillList: [
    {
      icon: <SiPostgresql />,
      name: "PostgreSQL",
      years: 3,
      courses: 10,
    },
    {
      icon: <SiMicrosoftsqlserver />,
      name: "Microsoft SQL Server",
      years: 1,
      courses: 2,
    },
    {
      icon: <FaPython />,
      name: "Python",
      years: 1,
      courses: 2,
    },
    {
      icon: <SiR />,
      name: "R Programming",
      years: 2,
      courses: 20,
    },
    {
      icon: <SiPowerbi />,
      name: "PowerBI",
      years: 2,
      courses: 10,
    },
    {
      icon: <SiLooker />,
      name: "Looker Studio",
      years: 3,
      courses: 0,
    },
    {
      icon: <SiMicrosoftazure />,
      name: "Azure",
      years: 1,
      courses: 3,
    },
    {
      icon: <SiDatabricks />,
      name: "Databricks",
      years: 1,
      courses: 3,
    },
    {
      icon: <SiMicrosoftexcel />,
      name: "Excel",
      years: 3,
      courses: 0,
    },
    {
      icon: <SiGooglesheets />,
      name: "sheets",
      years: 3,
      courses: 0,
    },
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
      years: 7,
      courses: 0,
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
      years: 7,
      courses: 0,
    },
    {
      icon: <SiVisualstudiocode />,
      name: "Visual Studio Code",
      years: 1,
      courses: 0,
    },
    {
      icon: <FaGit />,
      name: "Git",
      years: 1,
      courses: 0,
    },
    {
      icon: <CgMonday />,
      name: "Monday",
      years: 3,
      courses: 0,
    },
    {
      icon: <FaSlack />,
      name: "Slack",
      years: 3,
      courses: 0,
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
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Stack</TabsTrigger>
            <TabsTrigger value="about me">About</TabsTrigger>
          </TabsList>

          {/*content*/}
          <div className="min-h-[70vh] w-full">
            {/*experience*/}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[550px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index)=> {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/*dot*/}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/*education*/}
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[550px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index)=> {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/*dot*/}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/*skills*/}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ScrollArea className="h-[550px]">
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index)=> {
                    return <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded flex justify-center items-center group">
                            <div className="text-6xl transition-all duration-300">
                              <motion.div
                                className="hover:text-accent"
                                animate= {{ y: [-2,2], transition: { delay: Math.random()*1, duration: 1, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}} 
                                whileHover={{scale: 1.05, transition: { duration: 0.1 }}}
                              >
                                {skill.icon}
                              </motion.div>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize"><b>{skill.name}</b> | {skill.years} Year{skill.years > 1 && "s"} {skill.courses !== 0 && " & " + skill.courses + " Course"}{skill.courses > 1 && "s"} </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  } )}
                </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/*about me*/}
            <TabsContent value="about me" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ScrollArea className="h-[582px]">
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[700px] mx-auto xl:mx-0">
                  {about.info.map((item, index)=> {
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>

        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;