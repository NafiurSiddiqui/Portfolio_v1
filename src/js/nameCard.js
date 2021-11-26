const screenContainer = document.querySelector('.main-content__screen-container');
const nameCard= document.querySelector('.main-content__card-container__card');
const nameCardSide__A= document.querySelector('.main-content__card-sideA');
const nameCardSide__B= document.querySelector('.main-content__card-sideB');
const trayParent = document.querySelector('.main-content__btn-container-tray');
const tray = document.querySelector('.main-content__btn-container-tray__header-container');
const arrowContainer = document.querySelector('.svg-arrow__container');
const arrowContainerId = document.getElementById('arrow-container');
const body = document.body;
const mainContent = document.querySelector('.main-content');

const promoBtn = document.getElementById('promo');
const promoBtnTray = document.getElementById('promoTray');
const transactionBtn = document.getElementById('transactional');
const transactionBtnTray = document.getElementById('transactionalTray');
const newsletterBtn = document.getElementById('newsletter');
const newsletterBtnTray = document.getElementById('newsletterTray');
const landingPageBtn = document.getElementById('promo');
const landingPageBtnTray = document.getElementById('promoTray');

// console.log(screenContainer);

function clearScreen() {
    screenContainer.innerHTML = '';
}

function openProject(project){
     mainContent.classList.toggle(project);
     trayParent.classList.add('traySlideDown');
     body.classList.remove('trayActivate');
}

function checkProjectActivation(a,b,c,aN,bN,cN){
     if(a  === true || b === true || c === true){
        mainContent.classList.remove(aN);
        mainContent.classList.remove(bN);
        mainContent.classList.remove(cN);

    }
};


let trayActivated = null;
let projectActivated = null;
let promoActivated = null;
let transactionalActivated = null;
let newsletterActivated = null;
let landingPageActivated = null;

const promoClass = 'projectPromoActivateMobile';
const transactionalClass = 'projectTransactionActivate';
const newsletterClass = 'projectNewsletterActivate';
const landingPageClass = 'projectLandingPageActivate';


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
    
    checkProjectActivation(transactionalActivated,newsletterActivated,landingPageActivated,transactionalClass,newsletterClass,landingPageClass)
    openProject(promoClass);
        promoActivated = true;
    

})

transactionalTray.addEventListener('click',function(){
    
    checkProjectActivation(promoActivated,newsletterActivated,landingPageActivated,
        promoClass,newsletterClass,landingPageClass)
    openProject(transactionalClass);
    transactionalActivated = true;

})

newsletterBtnTray.addEventListener('click',function(){
    
    console.log('clicked!');
    checkProjectActivation(promoActivated,transactionalActivated,landingPageActivated,promoClass,
        transactionalClass,landingPageClass)
    openProject(newsletterClass);
    newsletterActivated = true;
})

landingPageTray.addEventListener('click',function(){  
    console.log('clicked!');
     checkProjectActivation(promoActivated,transactionalActivated,newsletterActivated,promoClass,
        transactionalClass,newsletterClass)
    openProject(landingPageClass);
    transactionalActivated = true;
})


//if about me is clicked on mobile size,clear all projectClass

