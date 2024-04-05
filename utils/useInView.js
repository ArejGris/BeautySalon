"use client";
import { motion } from "framer-motion";
import { useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export function DivMotion({ children, initial,animate ,isInView ,duration,delay}) {
  
  const control = useAnimation();
  useEffect(() => {
      if (isInView) {
        control.start(initial);
      } else{
        control.start(animate)
      }
    
   
  }, [isInView, control]);
  return (
    <motion.div
      initial={initial}
      animate={control}
      transition={{duration:duration,delay:delay}}
      viewport={{amount:.5,once:true}}
    >
     
        {children}
 
    </motion.div>
  );
}
