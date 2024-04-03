"use client";
import { useResize } from "@/utils/useResize";
import "./navbar.css";
import { useState } from "react";
import { motion } from "framer-motion";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [expand, setExpand] = useState(false);
  const [expand2, setExpand2] = useState(false);
  const variants = {
    open: {
      translateX: 0,
      opacity: 1,
    },
    close: {
      translateX: 100,
      opacity: 0,
    },
  };
  const variants2 = {
    start: {
      height: 150,
      backgroundColor: "#dddddd",
    },
    end: {
      height: 0,
    },
  };
  const variants3= {
    start: {
      height: 150,
      backgroundColor: "#dddddd",
    },
    end: {
      height:"auto",
    },
  };

  function handleOpen() {
    setOpen((prev) => !prev);
  }
  function handleExpand() {
    setExpand((prev) => !prev);
  }
  function handleExpand2() {
    setExpand2((prev) => !prev);
  }
  const { win } = useResize();
  const Nav1 = () => {
    return (
      <div className="navbar">
        
        <img src="./logo.png" alt="" />
        <ul>
          <li className="service">
           <div>Service</div> 
            {!expand ? (
              <span
                class="material-symbols-outlined expand-icon"
                onClick={handleExpand}
              >
                expand_more
              </span>
            ) : (
              <span
                class="material-symbols-outlined expand-icon"
                onClick={handleExpand}
              >
                expand_less
              </span>
            )}
            {expand && (
              <motion.ul
              className="expanded-list"
                initial={variants2.end}
                animate={expand ? variants2.start : variants2.end}
              >
                <li>S1</li>
                <li>S2</li>
                <li>S3</li>
              </motion.ul>
            )}
          </li>
          <li>About Us</li>
          <li>Article</li>
        </ul>
      </div>
    );
  };
  const Nav2 = () => {
    return (
      <div className="navbar navbar2">
        
        <img src="./logo.png" alt="" />
        <div onClick={handleOpen}>
          
          <span className="material-symbols-outlined icon">menu</span>
        </div>
      </div>
    );
  };
  return (
    <div className="myNav">
      <div className="nav">
        {win >= 750 ? Nav1() : Nav2()}
      </div>
      <>
        {open ? (
          <motion.ul
            className="list"
            initial={variants.close}
            animate={open ? variants.open : variants.close}
          >
            <motion.li className="expanded-li" 
            initial={variants3.end}
                animate={expand2 ? variants3.start : variants3.end}>
              <div className="service-li">
              Service
              <span class="material-symbols-outlined icon" onClick={handleExpand2}>expand_more</span></div>
              {expand2&&<motion.ul
             
                initial={variants2.end}
                animate={expand2 ? variants2.start : variants2.end}
              >
                <li>S1</li>
                <li>S2</li>
                <li>S3</li>
              </motion.ul>}
            </motion.li>
            <li>About us</li>
            <li>Article</li>
          </motion.ul>
        ) : null}
      </>
    </div>
  );
}
