export function  displayMsg(message,margin){
    console.log('display massge')
    const box =document.getElementById("box")
    const msg=document.createElement("div")
    const border=document.createElement("div")
    msg.classList.add('msg')
    msg.setAttribute('id','msg')
    border.classList.add("border")
    msg.innerHTML=message
    msg.style.width='fit-content'
    msg.style.padding='7px 18px'
    msg.style.marginTop='7px'
    msg.style.borderRadius="10px"
    msg.style.background="white"
    msg.style.color='gray'
    if(margin=='false'){
   border.appendChild(msg)
    border.style.marginLeft='auto'
    }
    else{
        const icon=document.createElement("div")
        const span=document.createElement("span")
        span.className="material-symbols-outlined"
        
        span.textContent="face_4"
        icon.appendChild(span)
        icon.style.borderRadius='100%'
        border.appendChild(icon)
        border.appendChild(msg)
        border.style.display='flex'
    border.style.marginRight='auto' 
    }
    box.appendChild(border)
   box.scrollTop=box.scrollHeight
}
