import { checkProjectActivation } from "./tray";
import { checkProjectBodyActivation, promoActivatedDesktop } from "./projects";
import { transactionalActivatedDesktop } from "./projects";
import { newsletterActivatedDesktop } from "./projects";
import { landingPageActivatedDesktop } from "./projects";
import {transactionalClass , promoClass,newsletterClass, landingPageClass,contactPageClass } from "./tray";
import { transactionalActivated, newsletterActivated,promoActivated,  landingPageActivated,contactActivated} from "./tray";
import { mainContent } from "./nameCard";


const logo = document.getElementById('logo');
const body = document.body;
// console.log(logo);


export const logoReset = logo.addEventListener('click',()=>{
    console.log('cool');
    
    //check for body projectActivation

     checkProjectBodyActivation(transactionalActivatedDesktop,newsletterActivatedDesktop,landingPageActivatedDesktop, promoActivatedDesktop,null,transactionalClass,newsletterClass,landingPageClass,promoClass,null);
    //check for mainContent Project activation
      checkProjectActivation(transactionalActivated,newsletterActivated,landingPageActivated, contactActivated,promoActivated,transactionalClass,newsletterClass,landingPageClass,contactPageClass,promoClass)
    body.classList.remove('card-active');
    body.classList.remove('trayActivate');
    mainContent.classList.remove('contact-page-active')
})




console.log(logo);