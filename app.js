var tl = gsap.timeline();

tl.to(".full",{
    right : 0,
    duration : 1,
    ease : "power4.inOut",
})

tl.from(".full>h4",{
    opacity : 0,
    x : 150,
    duration : 0.6,
    stagger : 0.2,
})

tl.from(".full>i",{
    opacity: 0,
})

tl.pause();

var menu = document.querySelector(".nav>i")
var cross = document.querySelector(".full>i")

menu.addEventListener("click",function(){
    tl.play();
})
cross.addEventListener("click",function(){
    tl.reverse();
})