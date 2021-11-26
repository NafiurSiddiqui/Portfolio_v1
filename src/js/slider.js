const projectScreen = document.querySelector('.projectScreen__project');
const projectScreenChild = document.querySelector('.projectScreen__project_modal-close ');
const projectWrapper = document.querySelector('.projectScreen__project-project__wrapper');
const cross = document.querySelector('.projectScreen__project-cross');
const slideLeft = document.querySelector('.fa.fa-angle-left');
const slideRight = document.querySelector('.fa.fa-angle-right');

const projectPromoScreen = document.getElementById('promo-codeschool');
const projectPromoPreview = document.querySelector('.project-promo__image');;

console.log(projectWrapper);




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

projectPromoPreview.addEventListener('click',()=>{
    projectScreen.classList.add('project-active');
    // console.log(projectScreen);
    projectPromoScreen.classList.add('promo-active');
})
