"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from 'react-icons/fi';
import Link from "next/link";
import { motion } from "framer-motion";

const ResumeDownload = () => {
    return <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
        <Button asChild
            variant="outline" 
            size="lg" 
            className="uppercase flex items-center gap-2"
        > 
        <Link href='/Resume.pdf' target="_blank">
            <span>Download CV</span>
            <FiDownload className="text-xl"/>
        </Link>
        </Button>
    </motion.div>;
};

export default ResumeDownload;