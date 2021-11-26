const projectScreen = document.querySelector('.projectScreen__project');
const projectScreenChild = document.querySelector('.projectScreen__project_modal-close ');
const projectWrapper = document.querySelector('.projectScreen__project-project__wrapper');
const cross = document.querySelector('.projectScreen__project-cross');
const slideLeft = document.querySelector('.fa.fa-angle-left');
const slideRight = document.querySelector('.fa.fa-angle-right');

const projectPromoScreen = document.getElementById('project-promo');
const projectPromoPreview = document.querySelectorAll('.project-promo__image');
const projectTransactional = document.getElementById('project-transactional');

console.log(projectTransactional);




//closing modals

projectScreenChild.addEventListener('click',()=>{
    console.log('cool');
    projectScreen.classList.remove('project-active');
})

cross.addEventListener('click',()=>{
    projectScreen.classList.remove('project-active');
})

//slider

slideLeft.addEventListener('click',()=>{
    // console.log('cool');
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

console.log(projectPromoPreview);
//transactional mail

// projectTransactional.