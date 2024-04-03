'use client'
import { displayMsg } from "@/utils/displayMsg";
import "./bot.css";
import { useEffect, useRef, useState } from "react";
import FloatBtn from "../utils/FloatBtn";

export default function MyBot({closeBot}) {
   const [start,setStart]= useState(false)
   const talker= useState("bot")
   const ref=useRef()
   const answer=useRef(null)
   const q=useRef()
   function repondMsg(msg){
    if(msg=='male'){
    displayMsg("you can visit our skin center and laser beauty center for women at",'true')
    }else{
    displayMsg("you can visit our skin center and laser beauty center for men at","true")
    }
   }
   function startTalk(){
    setStart(true)
   }
    function addMsg(msg){
     displayMsg(msg,'false')
     repondMsg(msg)
    }
  function startMsg(){
    return(<>
    <button className="btn" onClick={startTalk}>let's start talking</button>
    </>)
  }
    function Question(){
      return(
        <form >
        <label>gender</label>
            <select name="gender" id="g" ref={answer} onChange={  ()=>{ addMsg(answer.current.value)}}>
              <option value=""></option>
            <option value="male" >male</option>
            <option value="female">female</option></select>
          </form>
      )
    }

  return (
    <>
      <div className="bot">
      <span class="material-symbols-outlined" onClick={closeBot}>
close
</span>
        <div className="container">
        
        <div id="box" >
          {!start&&startMsg()}
        {start&&Question()}
        </div>
        <form className="form" onSubmit={(e)=>{  e.preventDefault();addMsg(ref.current.value)}}>
          <input type="text" ref={ref} placeholder="write a reply..."/>
          <button type="submit">
          <span class="material-symbols-outlined">
send
</span>
          </button>
        </form>
       
        </div>

      </div>
    </>
  );
}
