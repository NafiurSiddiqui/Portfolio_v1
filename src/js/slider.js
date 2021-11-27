const projectScreen = document.querySelector('.projectScreen__project');
const projectScreenChild = document.querySelector('.projectScreen__project_modal-close ');
const projectWrapper = document.querySelector('.projectScreen__project-project__wrapper');
const projectWrapperLandPage = document.querySelector('.projectScreen__project-project__wrapper-landingPage');
const cross = document.querySelector('.projectScreen__project-cross');
const slideLeft = document.querySelector('.fa.fa-angle-left');
const slideRight = document.querySelector('.fa.fa-angle-right');
const navContainer = document.querySelector('.navigation-container');
const projectPromoScreen = document.getElementById('project-promo');
const projectPromoPreview = document.querySelectorAll('.project-promo__image');
const projectTransactional = document.getElementById('project-transactional');
const projectTransactionalPreview = document.getElementById('project-transactional__image');
const projectNewsletter = document.getElementById('project-newsletter');
const projectNewsletterPreview = document.getElementById('project-newsletter__img');

console.log(projectWrapperLandPage);




//closing modals

projectScreenChild.addEventListener('click',()=>{
    console.log('cool');
    projectScreen.classList.remove('project-active');
    projectScreenChild.classList.remove('negativeIndex');

})

cross.addEventListener('click',()=>{
    projectScreen.classList.remove('project-active');
    projectScreenChild.classList.remove('negativeIndex');
})

//slider

slideLeft.addEventListener('click',()=>{
    console.log('cool');
    projectWrapper.classList.remove('slideLeft');
  
    
})

slideRight.addEventListener('click',()=>{
    console.log('cool');
    projectWrapper.classList.add('slideLeft');
})


//promo mails

projectPromoPreview.forEach(btns => {
   btns.addEventListener('click',()=>{
      projectScreen.classList.add('project-active');
    projectPromoScreen.classList.add('project-promo-active');
   })
});


//transactional mail

projectTransactionalPreview.addEventListener('click',()=>{
    console.log('working!');
    console.log(projectTransactional.classList);
    projectScreen.classList.add('project-active');
    projectTransactional.classList.add('project-transactional-active');
    navContainer.classList.add('hidden');
})

//newsletter mail

projectNewsletterPreview.addEventListener('click',()=>{
    console.log('working!');
    // console.log(projectNewsletter.classList);
    projectScreen.classList.add('project-active');
    projectNewsletter.classList.add('project-newsletter-active');
    navContainer.classList.add('hidden');
    projectScreenChild.classList.add('negativeIndex')
})


//landing page

