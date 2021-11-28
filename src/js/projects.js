import { checkProjectActivation } from "./tray";
import { promoActivated } from "./tray";
import { transactionalActivated } from "./tray";
import { newsletterActivated } from "./tray";
import { landingPageActivated } from "./tray";
import { promoClass } from "./tray";
import { newsletterClass } from "./tray";
import { transactionalClass } from "./tray";
import { landingPageClass } from "./tray";
import { contactPageClass } from "./tray";
import { trayActivated } from "./tray";
import { contactActivated } from "./nameCard";
import { openProject } from "./tray";

const projectScreen = document.querySelector('.projectScreen__project');
const projectScreenChild = document.querySelector('.projectScreen__project_modal-close ');
export const projectWrapper = document.querySelector('.projectScreen__project-project__wrapper');
const projectWrapperLandPage = document.querySelector('.projectScreen__project-project__wrapper-landingPage');
const cross = document.querySelector('.projectScreen__project-cross');

const navContainer = document.querySelector('.navigation-container');
const projectPromoScreen = document.getElementById('project-promo');
const projectPromoPreview = document.querySelectorAll('.project-promo__image');
const projectPromoPreview__codeschool = document.getElementById('project-promo__img-codeschool');
const projectPromoPreview__meal = document.getElementById('project-promo__img-meal');

const projectTransactional = document.getElementById('project-transactional');
const projectTransactionalPreview = document.getElementById('project-transactional__image');
const projectNewsletter = document.getElementById('project-newsletter');
const projectNewsletterPreview = document.getElementById('project-newsletter__img');
const projectQpickPreviewImg = document.getElementById('project-qpick__img');
const projectTechwearPreviewImg = document.getElementById('project-techwear__img');
const projectQpickPreviewVdo = document.getElementById('project-qpick__vdo');
const projectTechwearPreviewVdo = document.getElementById('project-techwear__vdo');
const projectLandingPageScreen = document.getElementById('project-landingPage');
const landingPageSlideTechWearImg = document.querySelector('.landingPage.slide1');
const landingPageSlideTechWearVdo = document.querySelector('.landingPage.slide2');
const landingPageSlideQpickImg = document.querySelector('.landingPage.slide3');
const landingPageSlideQpickVdo = document.querySelector('.landingPage.slide4');
const nameCard= document.querySelector('.main-content__card-container__card');
//desktop project btns
const promoBtn = document.getElementById('promo');
const transactionBtn = document.getElementById('transactional');
const newsletterBtn = document.getElementById('newsletter');
const newsletterBtnTray = document.getElementById('newsletterTray');
const landingPageBtn = document.getElementById('promo');

// console.log(landingPageSlideQpickVdo);

let promoActivatedDesktop = null;


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




//promo mails

promoBtn.addEventListener('click',()=>{
    console.log('hello');
    checkProjectActivation(transactionalActivated,newsletterActivated,landingPageActivated, contactActivated,null,transactionalClass,newsletterClass,landingPageClass,contactPageClass,null)
    openProject(promoClass);
    promoActivatedDesktop = true;
    // nameCard.classList.add('hidden');
})

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
    projectScreenChild.classList.add('negativeIndex');
    
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
    projectScreenChild.classList.add('negativeIndex');
})



