import { projectWrapper } from "./projects";
import { logoReset } from "./logoReset";

const landingPageSlides =document.querySelectorAll('.landingPage');
const slideLeft = document.querySelector('.fa.fa-angle-left');
const slideRight = document.querySelector('.fa.fa-angle-right');






//slider for promo mail

slideLeft.addEventListener('click',()=>{
    // console.log('cool');
    projectWrapper.classList.remove('slideLeft');
  
    
})

slideRight.addEventListener('click',()=>{
    // console.log('cool');
    projectWrapper.classList.add('slideLeft');
})


//slider for landing page

let curSlide = 0;
let maxSlide = landingPageSlides.length;

const jumpToSlide = function(slide){
    landingPageSlides.forEach((s,i)=>{
      s.style.transform =`translateX(${120*(i - slide)}%)`;
})
}

const nextSlide = function(){
     if(curSlide=== maxSlide - 1){
        curSlide =0;
    }else{

        curSlide++;
    }
     jumpToSlide(curSlide);
}

const prevSlide = function(){
     if(curSlide=== 0){
        curSlide = maxSlide - 1;
    }else{

        curSlide--;
    }
     jumpToSlide(curSlide);
};

landingPageSlides.forEach((s,i)=>{
    s.style.transform =`translateX(${200*i}%)`;
})

slideLeft.addEventListener('click',prevSlide);

slideRight.addEventListener('click',nextSlide);



