'use client'
import { useEffect, useState } from "react"

export function useResize(){
 const [win,setWin] = useState(window.innerWidth) 
 function handleResize(){
   setWin(window.innerWidth)
 }
useEffect(()=>{

    window.addEventListener("resize",handleResize)
    return(()=>{
        window.removeEventListener("resize",handleResize)
    })
},[win])
return {win}
}