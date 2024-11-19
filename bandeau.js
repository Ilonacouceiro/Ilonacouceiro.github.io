const w = window.innerWidth;
const marquees = document.querySelectorAll(".marquee");

[...marquees].forEach(function(e){
  // du span dans marquee
  let speed = Number(e.dataset.speed);
  let sens = (speed>0) ? 1 : -1; 
  let mw = e.querySelector('.text').offsetWidth;
  let mp = e.querySelector('.block');


  /* on clone x fois pour remplir la largeur + 1 fois pour le raccord */
  let nclone = Math.floor(w/mw) + 1 ;
  let inner = mp.innerHTML;

  mp.style.width = (nclone+1) * mw + 10 +"px"; // 10 en plus arrondir

  for(let i=0;i<nclone;i++){
    inner+=mp.innerHTML;
  }

  mp.innerHTML = inner;

  let a = -mw;
  let b = 0;
  if(speed===-1){
    a = 0;
    b = mw;
  }

  
  gsap.to(mp,{
    duration:100/(speed*sens),
    repeat:-1,
    x:'+='+mw*sens,
    modifiers:{
      x: x => gsap.utils.wrap(-mw,0,parseFloat(x))+"px"
    },
    ease:'linear'
  })  ;

});
