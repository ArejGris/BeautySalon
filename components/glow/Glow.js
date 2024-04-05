'use client'
import { DivMotion } from "@/utils/useInView";
import "./glow.css";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { useResize } from "@/utils/useResize";
export default function Glow() {
  const glows=['S e r e n e','B e a u t y','R a d i a n t',
  'J o y','R e j u v e n a t e d','M a j e s t i c','R e s p l e n d e n t',
'H a r m o n i o u s','F l o u r i s h i n g'

  ]
const win=useResize()
const ref=useRef(null)
const isView=useInView(ref)
const variants={
  start:{
 translateY:100,
 opacity:0
  },
  end:{
translateY:0,
opacity:1
  }
}
  return (
    <div className="glow" ref={ref}>
      <h1>
        Find Your
        <br />
        Inner Glow
      </h1>
      <div className="grid">
       {glows.map((glow,index)=>
        (<DivMotion initial={variants.end} animate={variants.start} isInView={isView} duration={1} delay={win>450?Math.floor(index/3)*.5:index*.3}>
          <div className="grid-item">
        <div className="circle1">
          <span class="material-symbols-outlined">check_small</span>
        </div>
        <div>{glow}</div>
      </div>
          </DivMotion>))}
        
      </div>
    </div>
  );
}
