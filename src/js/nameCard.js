import { checkProjectBodyActivation } from "./projects";
import { checkProjectActivation } from "./tray";
import { promoActivated } from "./tray";
import { transactionalActivated } from "./tray";
import { newsletterActivated } from "./tray";
import { landingPageActivated } from "./tray";

import { transactionalActivatedDesktop } from "./projects";
import { promoActivatedDesktop } from "./projects";
import { newsletterActivatedDesktop } from "./projects";
import { landingPageActivatedDesktop } from "./projects";
import { promoClass } from "./tray";
import { newsletterClass } from "./tray";
import { transactionalClass } from "./tray";
import { landingPageClass } from "./tray";
import { contactPageClass } from "./tray";
import { trayActivated } from "./tray";
export let contactActivated = null;


const contactBtn = document.querySelector('.header__contact');
const contactScreen = document.getElementById('contact');
const screenContainer = document.querySelector('.main-content__screen-container');
const nameCard= document.querySelector('.main-content__card-container__card');
const nameCardSide__A= document.querySelector('.main-content__card-sideA');
const nameCardSide__B= document.querySelector('.main-content__card-sideB');
const arrowContainer = document.querySelector('.svg-arrow__container');
const arrowContainerId = document.getElementById('arrow-container');
const body = document.body;
export const mainContent = document.querySelector('.main-content');
const indicator = document.querySelector('.main-content_indicator-container');


// console.log(contact);

function clearScreen() {
    screenContainer.innerHTML = '';
}


nameCard.addEventListener('click',function(){ 
    console.log('working');  
     
    if(trayActivated === true){
        body.classList.remove('trayActivate');
        nameCard.classList.add('aboutMeActive');
        nameCard.classList.remove('cardSlideTop');
         checkProjectActivation(transactionalActivated,newsletterActivated,landingPageActivated, contactActivated,promoActivated,transactionalClass,newsletterClass,landingPageClass,contactPageClass,promoClass)
    }else if(trayActivated === false){
        
    arrowContainer.classList.toggle('arrowActivate');
    nameCard.classList.remove('aboutMeActive');
    body.classList.toggle('card-active');
    }
    if(body.classList.contains('card-active')){
        indicator.classList.add('hidden');
    }else{
        indicator.classList.remove('hidden');
    }
        body.classList.toggle('card-active');
        arrowContainer.classList.toggle('arrowActivate');
        nameCard.classList.remove('aboutMeActive');
        indicator.classList.toggle('hidden');
     
})



contactBtn.addEventListener('click',()=>{
     checkProjectBodyActivation(transactionalActivatedDesktop,newsletterActivatedDesktop,landingPageActivatedDesktop,promoActivatedDesktop ,promoClass,transactionalClass,newsletterClass,landingPageClass,contactPageClass,null);

     checkProjectActivation(promoActivated,transactionalActivated,landingPageActivated,newsletterActivated,null,promoClass,
        transactionalClass,landingPageClass,newsletterClass,null);

        
    mainContent.classList.toggle(contactPageClass);
    contactActivated = true;
    nameCard.classList.toggle('hidden');
})

