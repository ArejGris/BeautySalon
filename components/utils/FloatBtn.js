'use client'
import './FloatBtn.css'
export default function FloatBtn({showBot}){
    return(
        <div className="circle">
            <span class="material-symbols-outlined icon2" onClick={showBot}>
        phone_in_talk
        </span>
        </div>
        
    )
}