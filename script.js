var scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true,
    smartphone: {
       smooth: true
   },
   tablet: {
       smooth: true
   }})




function videoconanimation(){
    var videocon=document.querySelector(".video-container")
var playbtn=document.querySelector(".play")

videocon.addEventListener("mouseenter",function(){
   gsap.to(playbtn,{
    opacity:1,
    scale:1,
   })
})
videocon.addEventListener("mousemove",function(dets){
    console.log(dets)
   gsap.to(playbtn,{
    left:dets.x,
    top:dets.y,
   })
})
videocon.addEventListener("mouseleave",function(){
   gsap.to(playbtn,{
    opacity:0,
    scale:0
   })
})

}
videoconanimation();

function loadinganimation(){

    gsap.from(".page1 h1",{
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.9,
        stagger:0.3
    })
    gsap.from(".video-container video",{
        scale:0.5,
        opacity:0,
        delay:1.3,
        duration:0.7
    })
}
loadinganimation();


// function notification(){
//     if ("Notification" in window) {
//         // Request permission to display notifications
//         Notification.requestPermission().then((permission) => {
//           if (permission === "granted") {
//             // Create a new notification
//             const notification = new Notification("Hello, World!");
      
//             // Optional: Handle the click event of the notification
//             notification.onclick = () => {
//               console.log("Notification clicked");
//             };
//           }
//         });
//       }
// }
// notification()

function cursorAnimation(){
    let cursor=document.querySelector(".cursor");
    document.querySelectorAll(".box").forEach(function(elem){
        elem.addEventListener("mouseenter",function(){
            gsap.to(cursor,{
                transform: 'translate(-50%,-50%) scale(1)'
            })
        })
        elem.addEventListener("mouseleave",function(){
            gsap.to(cursor,{
                transform: 'translate(-50%,-50%) scale(0)'
            })
        })
     })
    
    document.addEventListener("mousemove",function(dets){
        gsap.to(cursor,{
            left:dets.x,
            top:dets.y
        })
    })
}
cursorAnimation()

gsap.to(".logocontainer svg",{
    transform:"translateY(-100%)",
    // ScrollTrigger:{
    //     trigger:".page1",
    //     scroller:".main",
    //     marker:true,
    //     start:"top 0",
    //     end:"top -5%",
    //     scrub:true
    // }
})

