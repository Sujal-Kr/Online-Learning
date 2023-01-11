// js for about pop up
const more= document.querySelector("#more")
let popup= false
more.addEventListener("click",(e)=>{
    popup=!popup
    console.log(popup)
    if(popup){
        document.querySelector(".about-cont").style.display="block"
    }
    else{
        document.querySelector(".about-cont").style.display="none"
    }
})
const back = document.querySelector(".back")
back.addEventListener("click",(e)=>{
    popup=!popup
    document.querySelector(".about-cont").style.display="none"
})
//  js for floating navbar
const floating = document.querySelector(".floating-nav")
const hamburger = document.querySelector(".hamburger")
hamburger.addEventListener("click",(e)=>{
    floating.style.display="block"
})
const close=document.querySelector(".close")
close.addEventListener("click",(e)=>{
    floating.style.display="none"
})