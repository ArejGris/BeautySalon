"use client";
import "./header.css";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { DivMotion } from "@/utils/useInView";
export default function Header() {
  const control=useAnimation()
  const ref=useRef(null)
 const isView =useInView(ref)

 const variant = {
  left: {
    translateX: -200,
   
  },
  right: {
    translateX: 200,
  },
  near: {
    translateX: 0,
   
  },
  down:{
    translateY:200
  },
  top:{
    translateY:0
  }
};

 useEffect(()=>{
  console.log(isView)
  if(isView){
    control.start(variant.top)
  }
  else {
    control.start(variant.down)
  }
 },[control,isView])
 
  return (
    <div className="header" >
      <div className="img">
        <Image src="/homebanner-scaled.jpg" width={1400} height={1500} />
      </div>
    <div className="container"  ref={ref}>
    <div className="details">
     <DivMotion  initial={variant.near} animate={variant.left} isInView={isView}>
     <motion.div className="content1" >
          <h4>
            SKIN INSTITUE
          </h4>
        </motion.div>
     </DivMotion>
     
    
       <DivMotion initial={variant.near} animate={variant.right} isInView={isView}>
       <motion.div className="content2" >
          <h4 >
            DERMA CENTER
          </h4>
        </motion.div>
       </DivMotion>
       
        
        <DivMotion initial={variant.near} animate={variant.left} isInView={isView}>
        <motion.div className="content3" >
          <h1 >
            Expert
          </h1>
        </motion.div>
        </DivMotion>
        <DivMotion initial={variant.near} animate={variant.right} isInView={isView}>
        <motion.div className="content4" >
          <h1 >
            Care For
          </h1>
        </motion.div>
        </DivMotion>
       
      </div>
    <motion.div className="details2" initial={variant.top} animate={control} transition={{duration:1}} viewport={{amount:.5}} >
    <motion.div className="content5" >
          <h1>every skin type</h1>
        </motion.div>

        <motion.div className="content6" >
          <p>
            FOR A WIDE RANGE OF CHALLENGING SKIN CONCERNS, WE PROVIDE EXTREMELY
            EFFECTIVE, DEPENDABLE, AND SECURE TREATMENTS.
          </p>
        </motion.div>
    </motion.div>
    </div>
    </div>
  );
}
