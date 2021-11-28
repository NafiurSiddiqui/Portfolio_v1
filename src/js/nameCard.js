const contactBtn = document.querySelector('.header__contact');
const contactScreen = document.getElementById('contact');
const screenContainer = document.querySelector('.main-content__screen-container');
const nameCard= document.querySelector('.main-content__card-container__card');
const nameCardSide__A= document.querySelector('.main-content__card-sideA');
const nameCardSide__B= document.querySelector('.main-content__card-sideB');
const arrowContainer = document.querySelector('.svg-arrow__container');
const arrowContainerId = document.getElementById('arrow-container');

export const trayParent = document.querySelector('.main-content__btn-container-tray');
const tray = document.querySelector('.main-content__btn-container-tray__header-container');
const body = document.body;
const mainContent = document.querySelector('.main-content');
export const promoBtn = document.getElementById('promo');
const promoBtnTray = document.getElementById('promoTray');
const transactionBtn = document.getElementById('transactional');
const transactionBtnTray = document.getElementById('transactionalTray');
const newsletterBtn = document.getElementById('newsletter');
const newsletterBtnTray = document.getElementById('newsletterTray');
const landingPageBtn = document.getElementById('promo');
const landingPageBtnTray = document.getElementById('promoTray');

// console.log(contact);

function clearScreen() {
    screenContainer.innerHTML = '';
}

function openProject(project){
     mainContent.classList.toggle(project);
     trayParent.classList.add('traySlideDown');
     body.classList.remove('trayActivate');
     
}

function checkProjectActivation(a,b,c,d,e,aN,bN,cN,dN,eN){
     if(a  === true || b === true || c === true || d === true || e === true){
        mainContent.classList.remove(aN);
        mainContent.classList.remove(bN);
        mainContent.classList.remove(cN);
        mainContent.classList.remove(dN);
        mainContent.classList.remove(eN);

    }
};


let trayActivated = null;
let projectActivated = null;
let promoActivated = null;
let transactionalActivated = null;
let newsletterActivated = null;
let landingPageActivated = null;
let contactActivated = null;

const promoClass = 'projectPromoActivateMobile';
const transactionalClass = 'projectTransactionActivate';
const newsletterClass = 'projectNewsletterActivate';
const landingPageClass = 'projectLandingPageActivate';
const contactPageClass = 'contact-page-active';


tray.addEventListener('click',function(){
     trayParent.classList.remove('traySlideDown');
    body.classList.toggle('trayActivate');
    nameCard.classList.add('cardSlideTop')
    trayActivated = true;
    if(!body.classList.contains('trayActivate')){
       nameCard.classList.remove('cardSlideTop');
    //    nameCard.classList.add('aboutMeActive')
    // body.classList.toggle('card-active');
    trayActivated = false;
    }
})



nameCard.addEventListener('click',function(){   
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
        body.classList.toggle('card-active');
        arrowContainer.classList.toggle('arrowActivate');
        nameCard.classList.remove('aboutMeActive')
})



promoBtnTray.addEventListener('click',function(){    
    console.log('clicked!');
    
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

contactBtn.addEventListener('click',()=>{
     checkProjectActivation(promoActivated,transactionalActivated,landingPageActivated,newsletterActivated,null,promoClass,
        transactionalClass,landingPageClass,newsletterClass,null)
    mainContent.classList.toggle(contactPageClass);
    contactActivated = true;

})