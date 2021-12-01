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


const body = document.body;
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
const landingPageBtn = document.getElementById('landingPage');



export let promoActivatedDesktop = null;
export let transactionalActivatedDesktop = null;
export let newsletterActivatedDesktop = null;
export let landingPageActivatedDesktop = null;


const projectScreenReset = function() {
    projectPromoScreen.classList.remove('project-promo-active');
    projectTransactional.classList.remove('project-transactional-active');
    projectNewsletter.classList.remove('project-newsletter-active');
     projectLandingPageScreen.classList.remove('project-landingPage-active');
     landingPageSlideQpickVdo.style.transform = `translateX(360%)`;
     landingPageSlideTechWearVdo.style.transform = `translateX(120%)`;
     landingPageSlideQpickImg.style.transform = `translateX(240%)`;
}

function checkOtherBodyActivation(){
    if(body.classList.contains('card-active' || 'trayActivate')){
        body.classList.remove('card-active');
    }
};

export function checkProjectBodyActivation(a,b,c,d,e,aN,bN,cN,dN,eN){
     if(a  === true || b === true || c === true || d === true || e === true){
        body.classList.remove(aN);
        body.classList.remove(bN);
        body.classList.remove(cN);
        body.classList.remove(dN);
        body.classList.remove(eN);
    }
};




function openProjectDektop(project){
     body.classList.toggle(project);  
}

function projectPreview(){
      projectScreen.classList.add('project-active');
projectScreenChild.classList.toggle('negativeIndex');
};

function checkContactActivation(){
    //this is to remove the hidden class from the nameCard.which remains hidden if project btn is clicked
    if(contactActivated === true){
        nameCard.classList.remove('hidden');
    }

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

    checkProjectBodyActivation(transactionalActivatedDesktop,newsletterActivatedDesktop,landingPageActivatedDesktop, null,null,transactionalClass,newsletterClass,landingPageClass,contactPageClass,null);
    checkContactActivation();
    checkProjectActivation(promoActivated,transactionalActivated,newsletterActivated,contactActivated,landingPageActivated,promoClass,
    transactionalClass,newsletterClass,contactPageClass,landingPageClass)

    openProjectDektop(promoClass);
    promoActivatedDesktop = true;
    // nameCard.classList.add('hidden');
})

projectPromoPreview__codeschool.addEventListener('click',()=>{
    projectPreview();
    projectPromoScreen.classList.add('project-promo-active');
})

projectPromoPreview__meal.addEventListener('click',()=>{
    console.log('ok');
      projectScreen.classList.add('project-active');
    projectPromoScreen.classList.add('project-promo-active');
    projectWrapper.classList.add('slideLeft');
})



//transactional mail

transactionBtn.addEventListener('click',()=>{
     checkProjectBodyActivation(promoActivatedDesktop,newsletterActivatedDesktop,landingPageActivatedDesktop,null,null,
    promoClass,newsletterClass,landingPageClass,contactPageClass,null);
    checkContactActivation();
    checkProjectActivation(promoActivated,transactionalActivated,newsletterActivated,contactActivated,landingPageActivated,promoClass,
    transactionalClass,newsletterClass,contactPageClass,landingPageClass)
    openProjectDektop(transactionalClass);
    transactionalActivatedDesktop = true;
})

projectTransactionalPreview.addEventListener('click',()=>{
    projectPreview();
    projectTransactional.classList.add('project-transactional-active');
    navContainer.classList.add('hidden');
})

//newsletter mail

newsletterBtn.addEventListener('click',()=>{
     checkProjectBodyActivation(promoActivatedDesktop,transactionalActivatedDesktop,landingPageActivatedDesktop,null,null,promoClass,
    transactionalClass,landingPageClass,contactPageClass,null);
    checkContactActivation(); 
    checkProjectActivation(promoActivated,transactionalActivated,newsletterActivated,contactActivated,landingPageActivated,promoClass,
    transactionalClass,newsletterClass,contactPageClass,landingPageClass)
    openProjectDektop(newsletterClass);
    newsletterActivatedDesktop = true;

})


projectNewsletterPreview.addEventListener('click',()=>{

    projectPreview();
    projectNewsletter.classList.add('project-newsletter-active');
    navContainer.classList.add('hidden');
    
})


//landing page


landingPageBtn.addEventListener('click',()=>{
    checkProjectBodyActivation(promoActivatedDesktop,transactionalActivatedDesktop,newsletterActivatedDesktop,null,null,promoClass,
    transactionalClass,newsletterClass,contactPageClass,null);
    checkContactActivation();
    checkProjectActivation(promoActivated,transactionalActivated,newsletterActivated,contactActivated,landingPageActivated,promoClass,
    transactionalClass,newsletterClass,contactPageClass,landingPageClass)

    openProjectDektop(landingPageClass);
    landingPageActivatedDesktop = true;
})

projectQpickPreviewImg.addEventListener('click',()=>{
    projectPreview();
    //activate the landingpage screen 
    projectLandingPageScreen.classList.add('project-landingPage-active');
    //activate qpick image
    landingPageSlideQpickImg.style.transform = `translateX(0%)`;
    landingPageSlideTechWearImg.style.transform = `translateX(-120%)`;
     navContainer.style.display='inline-block';
})

projectQpickPreviewVdo.addEventListener('click',()=>{
    
    projectPreview();
    //activate the landingpage screen 
    projectLandingPageScreen.classList.add('project-landingPage-active');
    //activate qpick image
    landingPageSlideQpickVdo.style.transform = `translateX(0%)`;
   
    
})

 projectTechwearPreviewImg.addEventListener('click',()=>{
   projectPreview();
    //activate the landingpage screen 
    projectLandingPageScreen.classList.add('project-landingPage-active');
})

 projectTechwearPreviewVdo.addEventListener('click',()=>{
    projectPreview();
    //activate the landingpage screen 
    projectLandingPageScreen.classList.add('project-landingPage-active');
    // //activate qpick image
    landingPageSlideTechWearVdo.style.transform = `translateX(0%)`;
    
})



