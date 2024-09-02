
function locomotive(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


}
locomotive();
function cursorEffect(){
var page1Content = document.querySelector(".page1-content");
var cursor = document.querySelector(".cursor")

page1Content.addEventListener("mousemove",function(det){
    console.log(det.x);
    gsap.to(cursor,{
        x:det.x,
        y:det.y,
    })
})

page1Content.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale:0
    })
})
page1Content.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:1
    })
})
}
cursorEffect();
function page2Animation(){
    gsap.from(".page2-content h2",{
        y:40,
        opacity:0,
        stagger:.3,
        duration : 1,
        scrollTrigger:{
            trigger:".page2",
            scroller:".main", //when we use locomotive we change scroller body->.main
            // markers:true,
            start:"top 47%",
            end :"top 32%",
            scrub:3,
        }
    })
}
page2Animation();

function swipe(){
    var swiper = new Swiper(".mySwiper", {
        centeredSlides: true,
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 1500,
          disableOnInteraction: true,
        }
      });
}
swipe();

    var tl =gsap.timeline();
    tl.from(".loader h3",{
        opacity:0,
        x:40,
        duration :1,
        stagger:0.1

    })
    tl.to(".loader h3",{
        opacity:0,
        x:-20,
        duration:1,
        stagger:0.1
    })
    tl.to(".loader ",{
        opacity:0,
        display:"none" //none bcoz the loader div exist above dispite of not visible 
    })
    tl.from(".page1-content h1 span",{
       y:100,
       opacity:0,
       delay:-.5,
       stagger:0.1,
       duration:0.5
    })







//23cursor movement using javascript only:- 
// //dets is just a variable name we can take any name, give all the detail of our event dets.x give cuurrent position at x-axis
// page1Content.addEventListener("mousemove",function(dets){
//     cursor.style.left=dets.x+"px";//we add px bcoz dets.x will give only number 
//     cursor.style.top=dets.y+"px"
// })
