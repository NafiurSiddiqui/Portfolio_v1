const projectScreen = document.querySelector('.projectScreen__project');
const projectScreenChild = document.querySelector('.projectScreen__project_modal-close ');
const projectWrapper = document.querySelector('.projectScreen__project-project__wrapper');
const projectWrapperLandPage = document.querySelector('.projectScreen__project-project__wrapper-landingPage');
const cross = document.querySelector('.projectScreen__project-cross');
const slideLeft = document.querySelector('.fa.fa-angle-left');
const slideRight = document.querySelector('.fa.fa-angle-right');
const navContainer = document.querySelector('.navigation-container');
const projectPromoScreen = document.getElementById('project-promo');
const projectPromoPreview = document.querySelectorAll('.project-promo__image');
const projectPromoPreview__codeschool = document.getElementById('project-promo__img-codeschool');
const projectPromoPreview__meal = document.getElementById('project-promo__img-meal');

const projectTransactional = document.getElementById('project-transactional');
const projectTransactionalPreview = document.getElementById('project-transactional__image');
const projectNewsletter = document.getElementById('project-newsletter');
const projectNewsletterPreview = document.getElementById('project-newsletter__img');
const landingPageSlides =document.querySelectorAll('.landingPage');
const projectQpickPreviewImg = document.getElementById('project-qpick__img');
const projectTechwearPreviewImg = document.getElementById('project-techwear__img');
const projectQpickPreviewVdo = document.getElementById('project-qpick__vdo');
const projectTechwearPreviewVdo = document.getElementById('project-techwear__vdo');
const projectLandingPageScreen = document.getElementById('project-landingPage');
const landingPageSlideTechWearImg = document.querySelector('.landingPage.slide1');
const landingPageSlideTechWearVdo = document.querySelector('.landingPage.slide2');
const landingPageSlideQpickImg = document.querySelector('.landingPage.slide3');
const landingPageSlideQpickVdo = document.querySelector('.landingPage.slide4');

// console.log(landingPageSlideQpickVdo);


const projectScreenReset = function() {
    projectPromoScreen.classList.remove('project-promo-active');
    projectTransactional.classList.remove('project-transactional-active');
    projectNewsletter.classList.remove('project-newsletter-active');
     projectLandingPageScreen.classList.remove('project-landingPage-active');
     landingPageSlideQpickVdo.style.transform = `translateX(360%)`;
     landingPageSlideTechWearVdo.style.transform = `translateX(120%)`;
     landingPageSlideQpickImg.style.transform = `translateX(240%)`;
}

//closing modals

projectScreenChild.addEventListener('click',()=>{
    console.log('cool');
    projectScreen.classList.remove('project-active');
    projectScreenChild.classList.remove('negativeIndex');
    projectScreenReset();

})

cross.addEventListener('click',()=>{
    projectScreen.classList.remove('project-active');
    projectScreenChild.classList.remove('negativeIndex');
    projectScreenReset();
})

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
    s.style.transform =`translateX(${120*i}%)`;
})

slideLeft.addEventListener('click',prevSlide);

slideRight.addEventListener('click',nextSlide);




// * PREVIEWS

//promo mails

projectPromoPreview__codeschool.addEventListener('click',()=>{
    // console.log('ok');
      projectScreen.classList.add('project-active');
    projectPromoScreen.classList.add('project-promo-active');
})

projectPromoPreview__meal.addEventListener('click',()=>{
    console.log('ok');
      projectScreen.classList.add('project-active');
    projectPromoScreen.classList.add('project-promo-active');
    projectWrapper.classList.add('slideLeft');
})



//transactional mail

projectTransactionalPreview.addEventListener('click',()=>{
    console.log('working!');
    console.log(projectTransactional.classList);
    projectScreen.classList.add('project-active');
    projectTransactional.classList.add('project-transactional-active');
    navContainer.classList.add('hidden');
})

//newsletter mail

projectNewsletterPreview.addEventListener('click',()=>{
    console.log('working!');
    // console.log(projectNewsletter.classList);
    projectScreen.classList.add('project-active');
    projectNewsletter.classList.add('project-newsletter-active');
    navContainer.classList.add('hidden');
    projectScreenChild.classList.add('negativeIndex')
})


//landing page

projectQpickPreviewImg.addEventListener('click',()=>{
    //activate the parent project container
    projectScreen.classList.add('project-active');
    //activate the landingpage screen 
    projectLandingPageScreen.classList.add('project-landingPage-active');
    //activate qpick image
    landingPageSlideQpickImg.style.transform = `translateX(0%)`;
})

projectQpickPreviewVdo.addEventListener('click',()=>{
    //activate the parent project container
    projectScreen.classList.add('project-active');
    //activate the landingpage screen 
    projectLandingPageScreen.classList.add('project-landingPage-active');
    //activate qpick image
    landingPageSlideQpickVdo.style.transform = `translateX(0%)`;
    
})

 projectTechwearPreviewImg.addEventListener('click',()=>{
     //activate the parent project container
    projectScreen.classList.add('project-active');
    //activate the landingpage screen 
    projectLandingPageScreen.classList.add('project-landingPage-active');
    // //activate qpick image
    // landingPageSlideQpickVdo.style.transform = `translateX(0%)`;
    
})

 projectTechwearPreviewVdo.addEventListener('click',()=>{
     //activate the parent project container
    projectScreen.classList.add('project-active');
    //activate the landingpage screen 
    projectLandingPageScreen.classList.add('project-landingPage-active');
    // //activate qpick image
    landingPageSlideTechWearVdo.style.transform = `translateX(0%)`;
    
})



