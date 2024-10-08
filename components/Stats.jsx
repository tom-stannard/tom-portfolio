"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
    {
        num: 3,
        text: "Years of experience",
    },
    {
        num: 12,
        text: "Technologies Mastered",
    },
    {
        num: 42,
        text: "Dashboards Created",
    },
    {
        num: 257,
        text: "Queries Written",
    },
]

const Stats = () => {
    return <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                {stats.map((item, index)=> {
                    return (
                        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }} className="flex-1 flex gap-4 items-center justify-center xl:justify-start" key={index}>
                            <CountUp 
                                end={item.num} 
                                duration={5} 
                                delay ={2}
                                className="text-4xl xl:text-6xl font-extrabold"
                            />
                            <p 
                                className={`${
                                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                                } leading-snug text-white/80`}
                            >
                                {item.text}
                            </p>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    </section>;
};

export default Stats;