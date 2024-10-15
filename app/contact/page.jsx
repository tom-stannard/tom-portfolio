"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { 
  Select, 
  SelectContent, 
  SelectGroup, 
  SelectItem, 
  SelectLabel, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '+61 402 824 763',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'tom_work@live.com',
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'City',
    description: 'Cobbitty, NSW 2570, Australia',
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  return (
  <motion.section
    initial={{opacity: 0}} 
    animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'}}}
    className="py-6"
  >
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row gap-[30px]">
        {/*form*/}
        <div className="xl:h-[54%] order-2 xl:order-none">
          <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
            <h3 className="text-4xl text-accent">Get in touch</h3>
            <p className="text-white/60">
              Feel free to reach out with any queries or feedback and I will be in touch as soon as possible.
            </p>
            {/*input*/}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input type="firstname" placeholder="Firstname" />
            <Input type="lastname" placeholder="Lastname" />
            <Input type="email" placeholder="Email" />
            <Input type="mobile" placeholder="Mobile" />
            </div>
            {/* select */}
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a Query Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select a Query Type</SelectLabel>
                  <SelectItem value="eop">Employment Opportunity</SelectItem>
                  <SelectItem value="wfb">Website Feedback</SelectItem>
                  <SelectItem value="bgr">Bug Report</SelectItem>
                  <SelectItem value="oth">Other</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {/* textarea */}
            <Textarea 
              className="h-[200px]" 
              placeholder="Type your message here..."
            />
            {/* btn */}
            <Button size="md" className="max-w-40">
              Send message
            </Button>
          </form>
        </div>
        {/* info */}
        <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
          <ul className="flex flex-col gap-10">
            {info.map((item, index) => {
              return <li key={index} className="flex items-center gap-6">
                <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-xl flex items-center justify-center">
                  <div className="text-[28px]">{item.icon}</div>
                </div>
                <div className="flex-1">
                  <p className="text-white/60">{item.title}</p>
                  <h3 className="text-xl">{item.description}</h3>
                </div>
              </li>
            })}
          </ul>
        </div>
      </div>
    </div>
  </motion.section>
  );
};

export default Contact;