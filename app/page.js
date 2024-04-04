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
const Header=dynamic(()=>import('@/components/header/Header'),{ssr:false})
export default function Home() {
  const [show,setShow]=useState(false)
  function showBot(){
    setShow(prev=>!prev)
  }
  return (
    <>
    <Navbar/>
    <Header/>
    <Main/>
    <Glow/>
    <Contact/>
    <ChatBot/>
    {show&&<MyBot closeBot={showBot}/>}
    {!show&&<FloatBtn showBot={showBot}/>}
    <div className="div" style={{height:'600px'}}></div>
    </>
  );
}
