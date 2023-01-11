const floatingdiv=document.querySelector(".floating-cont")
const hamburger = document.querySelector(".nav-ham-menu-cont")
const navbar= document.querySelector(".navbar")
let activeham="false"
const width=window.screen.availWidth

hamburger.addEventListener("click",(e)=>{
    if(activeham){
        floatingdiv.style.display="block"
        
    }else{
        floatingdiv.style.display="none"
    }
    activeham=!activeham
})


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navbar.style.margin=0
    navbar.style.width="100%"
    navbar.style.top="0"
    navbar.style.borderRadius=0
  } else {
    navbar.style.margin="1%"
    navbar.style.width="98%"
    navbar.style.top="1rem"
    navbar.style.borderRadius="4px"
  }
}



// Js for changging the background 
const balls = document.querySelectorAll(".balls")
const wall = document.querySelector(".wallpaper-cont")
const urls=["https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,"https://images.pexels.com/photos/877971/pexels-photo-877971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,"https://images.pexels.com/photos/2177482/pexels-photo-2177482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","./bg.png"]
let count=0
setInterval(() => {
  count%=urls.length
  wall.style.backgroundImage=`url(${urls[count]})`
  balls.forEach(item=>{
    item.classList.remove("me")
})
balls[count].classList.add("me")
  count++
}, 4000);
// js for linking about section
const about = document.querySelector(".about")
about.addEventListener("click", (e) =>{
  location.assign("./about.html")
})