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
    description: '+61 402 824 763'
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'tom_work@live.com'
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Suburb',
    description: 'Oran Park, NSW 2570, Australia'
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  return <motion.section>contact page</motion.section>;
  
};

export default Contact;