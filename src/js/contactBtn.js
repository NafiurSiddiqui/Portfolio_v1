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
import { mainContent } from "./nameCard";




export let contactActivated = null;



const contactBtn = document.querySelector('.header__contact');
const contactScreen = document.getElementById('contact');
const screenContainer = document.querySelector('.main-content__screen-container');
const nameCard= document.querySelector('.main-content__card-container__card');


contactBtn.addEventListener('click',()=>{
     checkProjectBodyActivation(transactionalActivatedDesktop,newsletterActivatedDesktop,landingPageActivatedDesktop,promoActivatedDesktop ,promoClass,transactionalClass,newsletterClass,landingPageClass,contactPageClass,null);

     checkProjectActivation(promoActivated,transactionalActivated,landingPageActivated,newsletterActivated,null,promoClass,
        transactionalClass,landingPageClass,newsletterClass,null);

        
    mainContent.classList.toggle(contactPageClass);
    contactActivated = true;
    nameCard.classList.toggle('hidden');
})
