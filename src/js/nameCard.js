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

// console.log(trayParent);



nameCard.addEventListener('click',function(){
   
body.classList.toggle('card-active');
arrowContainer.classList.toggle('arrowActivate');
})

let trayActivated;

tray.addEventListener('click',function(){


    console.log('ok boss!');
     trayParent.classList.remove('traySlideDown');
    body.classList.toggle('trayActivate');
})

promoBtnTray.addEventListener('click',function(){    
    console.log('clicked!');
     mainContent.classList.toggle('projectPromoActivateMobile');
     trayParent.classList.add('traySlideDown');
     body.classList.remove('trayActivate');
     

})

transactionalTray.addEventListener('click',function(){
    
    console.log('clicked!');
})
newsletterBtnTray.addEventListener('click',function(){
    
    console.log('clicked!');
})
landingPageTray.addEventListener('click',function(){
    
    console.log('clicked!');
})
