
// var bg = document.body.style.backgroundImage;

// gsap.to(document.body.style.backgroundImage,{rotation:360 , duration:2})

gsap.timeline()
  .from(".logo", {opacity:0, scale:0, ease:"back" ,duration:3})

gsap.to('.loading-bg', {
  rotate: 360,  
  duration: 60,
  ease: 'linear',
  repeat:-1
})
  // var loader =document.getElementById("preloader");
  // window.addEventListener("load" ,function(){
  //   loader.style.display="none";
  // })

  setTimeout(function(){
    document.querySelector('.preloader').style.display = 'none';
    //$(".preloader").fadeToggle();
    $(".contact").removeClass("d-none").addClass("d-block");
},3500);