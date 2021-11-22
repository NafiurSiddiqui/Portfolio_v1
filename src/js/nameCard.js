const nameCard= document.querySelector('.main-content__card-container__card');
const nameCardSide__A= document.querySelector('.main-content__card-sideA');
const nameCardSide__B= document.querySelector('.main-content__card-sideB');
const tray = document.querySelector('.main-content__btn-container-tray');
const arrowContainer = document.querySelector('.svg-arrow__container');
const arrowContainerId = document.getElementById('arrow-container');


console.log(tray);



nameCard.addEventListener('click',function(){
   
document.body.classList.toggle('card-active');
arrowContainer.classList.toggle('arrowActivate');
})

tray.addEventListener('click',function(){
    console.log('ok boss!');
    tray.classList.toggle('trayActivate');
})

