var crsr=document.querySelector("#cursor")
var blure=document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
crsr.style.left=dets.x+"px"
crsr.style.top=dets.y+"px"
blure.style.left=dets.x-50+"px"
    blure.style.top=dets.y-50+"px"
})
gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "110px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers:true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  // duration:0.5,
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers:true,
    start: "top -30%",
    end: "top -100%",
    scrub: 2,
  },
});
