import btn from '../sound/btns.mp3';
import reset from '../sound/reset.mp3';
import cardOn_A from '../sound/cardOn_A.mp3';
import cardOn_B from '../sound/cardOn_B.mp3';
import social from '../sound/social.mp3';
import contactSound from '../sound/contact.mp3';
import tray from '../sound/trayUp.mp3';
import mail from '../sound/mail.mp3';


const sideA = document.querySelector('.main-content__card-sideA');
const sideB = document.querySelector('.main-content__card-sideB');
const projectBtnDesk = document.querySelectorAll('.project-btn');
const projectBtnTray = document.querySelectorAll('.project-btn__tray');
const logoBtn = document.querySelector('.header__logo-container');
const contactBtn = document.querySelector('.header__contact');
const socialMediaBtn = document.querySelectorAll('.social-media_link');
console.log(socialMediaBtn);
const mailBtn = document.querySelector('.contact-screen__mail-btn');

//sounds

const socialSound = new Audio(social);
socialSound.volume = 0.30;

const namecardOn_A = new Audio(cardOn_A);
namecardOn_A.volume = 0.30;

const namecardOn_B = new Audio(cardOn_B);
 namecardOn_B.volume = 0.30;

const btnProject = new Audio(btn);
btnProject.volume = 0.20;

const contactSoundOn = new Audio(contactSound);
contactSoundOn.volume = 0.20;

const resetSound = new Audio(reset);
resetSound.volume = 0.20;

const traySound = new Audio(tray);
traySound.volume = 0.20;

const mailSound = new Audio(mail);
mailSound.volume = 0.20;



sideA.addEventListener('click',()=>{

       namecardOn_A.play();

})

sideB.addEventListener('click',()=>{
    namecardOn_B.play();
})

projectBtnDesk.forEach(btn=>{
    btn.addEventListener('click',()=>{
        console.log('sound ok');
        btnProject.play();
    })
})


contactBtn.addEventListener('click',()=>{
    contactSoundOn.play();
})

logoBtn.addEventListener('click',()=>{
    resetSound.play();
})

projectBtnTray.forEach(btn =>{
    btn.addEventListener('click',()=>{
         btnProject.play();
    })
})


socialMediaBtn.forEach(btn =>{
    btn.addEventListener('click',()=>{
        socialSound.play();
    })
})

mailBtn.addEventListener('click',()=>{
    mailSound.play();
})