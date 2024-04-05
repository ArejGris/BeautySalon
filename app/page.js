'use client'
import MyBot from "@/components/Bot/Bot";
import  Main  from "@/components/main/Main";
import Navbar from "@/components/navbar/Navbar";
import FloatBtn from "@/components/utils/FloatBtn";
import dynamic from "next/dynamic";
import './style.css'
import { useState } from "react";
import Glow from "@/components/glow/Glow";
import Contact from "@/components/contact/contact";
import ChatBot from "@/components/chat-bot/ChatBot";
import Tools from "@/components/tools/Tools";
const Header=dynamic(()=>import('@/components/header/Header'),{ssr:false})
export default function Home() {
  const [show,setShow]=useState(false)
  const [show2,setShow2]=useState(false)
  function showBot(){
    setShow(prev=>!prev)
  }
  function showBot2(){
    setShow2(prev=>!prev)
  }
  return (
    <>
    <Navbar/>
    <Header/>
    <Main/>
    <Glow/>
    <Contact/>
    <Tools/>
   {show&& <ChatBot closeBot={showBot}/>}
    {show2&&<MyBot closeBot={showBot2}/>}
    
    {!show&&<FloatBtn showBot={showBot} style="left"/>}
    {!show2&&<FloatBtn showBot={showBot2} style="right"/>}
    <div className="div" style={{height:'600px'}}></div>
    </>
  );
}
