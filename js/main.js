
// gsap.timeline()
//   .from(".logo", {opacity:0, scale:0, ease:"back" ,duration:3})

// gsap.to('.loading-bg', {
//   rotate: 360,  
//   duration: 60,
//   ease: 'linear',
//   repeat:-1
// })


//   setTimeout(function(){
//     document.querySelector('.preloader').style.display = 'none';
//     //$(".preloader").fadeToggle();
//     $(".content").removeClass("d-none").addClass("d-block");
// },3500);

gsap.registerPlugin(ScrollTrigger);

const t1 = gsap.timeline();
t1.to(".wrapper",5, {x:-window.innerWidth})
.from(".s2",5,{ opacity:0, x:50 , skewX:50})
.to(".wrapper",5, {x:-window.innerWidth*2})
.from(".s3",5,{ opacity:0, x:50 , skewX:50})
.to(".wrapper",5, {x:-window.innerWidth*3})
.from(".s4",5,{ opacity:0, x:50 , skewX:50})

ScrollTrigger.create({
  animation:t1,
  trigger:".wrapper",
  start:"center center",
  end:"+=4000",
  scrub:true,
  pin:true
})


const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})