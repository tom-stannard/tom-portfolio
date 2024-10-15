"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { motion } from "framer-motion";

const WorkSliderBtns = ({ containerStyles, btnStyles, iconStyles }) => {
  const swiper = useSwiper();
    return ( 
    <div className={containerStyles}>
        
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
        <button className={btnStyles} onClick={()=> swiper.slidePrev()}>
            <PiCaretLeftBold className={iconStyles} />    
        </button>
        </motion.div>

        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
        <button className={btnStyles} onClick={()=> swiper.slideNext()}>
            <PiCaretRightBold className={iconStyles} />    
        </button>
        </motion.div>    
    </div>
  );
};

export default WorkSliderBtns