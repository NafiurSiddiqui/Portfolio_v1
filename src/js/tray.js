import { mainContent } from "./nameCard";
import { contactActivated } from "./nameCard";


const body = document.body;
const nameCard= document.querySelector('.main-content__card-container__card');
const trayParent = document.querySelector('.main-content__btn-container-tray');
const tray = document.querySelector('.main-content__btn-container-tray__header-container');
const promoBtnTray = document.getElementById('promoTray');
const transactionBtnTray = document.getElementById('transactionalTray');
const newsletterBtnTray = document.getElementById('newsletterTray');
const landingPageBtnTray = document.getElementById('promoTray');



export function openProject(project){
     mainContent.classList.toggle(project);
     trayParent.classList.add('traySlideDown');
     body.classList.remove('trayActivate');  
}

export function checkProjectActivation(a,b,c,d,e,aN,bN,cN,dN,eN){
     if(a  === true || b === true || c === true || d === true || e === true){
        mainContent.classList.remove(aN);
        mainContent.classList.remove(bN);
        mainContent.classList.remove(cN);
        mainContent.classList.remove(dN);
        mainContent.classList.remove(eN);
    }
};


export let trayActivated = null;
export let projectActivated = null;
export let promoActivated = null;
export let transactionalActivated = null;
export let newsletterActivated = null;
export let landingPageActivated = null;
// let contactActivated = null;

export const promoClass = 'projectPromoActivate';
export const transactionalClass = 'projectTransactionActivate';
export const newsletterClass = 'projectNewsletterActivate';
export const landingPageClass = 'projectLandingPageActivate';
export const contactPageClass = 'contact-page-active';


tray.addEventListener('click',function(){
    console.log('ok');
     trayParent.classList.remove('traySlideDown');
    body.classList.toggle('trayActivate');
    nameCard.classList.add('cardSlideTop')
    trayActivated = true;
    if(!body.classList.contains('trayActivate')){
       nameCard.classList.remove('cardSlideTop');
    trayActivated = false;
    }
})

mainContent.addEventListener('click',()=>{
    console.log('mainContent');
    // body.classList.remove('trayActivate');
})


promoBtnTray.addEventListener('click',function(){    
    console.log('clicked!');
    console.log(contactActivated);
    checkProjectActivation(transactionalActivated,newsletterActivated,landingPageActivated, contactActivated,null,transactionalClass,newsletterClass,landingPageClass,contactPageClass,null)
    openProject(promoClass);
    promoActivated = true;
})

transactionalTray.addEventListener('click',function(){
    
    checkProjectActivation(promoActivated,newsletterActivated,landingPageActivated,contactActivated,null,
        promoClass,newsletterClass,landingPageClass,contactPageClass,null)
    openProject(transactionalClass);
    transactionalActivated = true;

})

newsletterBtnTray.addEventListener('click',function(){
    
    console.log('clicked!');
    checkProjectActivation(promoActivated,transactionalActivated,landingPageActivated,contactActivated,null,promoClass,
        transactionalClass,landingPageClass,contactPageClass,null)
    openProject(newsletterClass);
    newsletterActivated = true;
})

landingPageTray.addEventListener('click',function(){  
    console.log('clicked!');
     checkProjectActivation(promoActivated,transactionalActivated,newsletterActivated,contactActivated,null,promoClass,
        transactionalClass,newsletterClass,contactPageClass,null)
    openProject(landingPageClass);
    transactionalActivated = true;
})
