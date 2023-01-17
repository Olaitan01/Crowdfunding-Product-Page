let pledgeBtn=document.querySelector(".backBtn")
let modal=document.querySelector(".modal")
let feedbackModal= document.querySelector(".feedback-modal")
let continueBtn=document.querySelector(".continue-btn")
let continueBtnTwo=document.querySelector(".continue-btn-two")
let continueBtnOne=document.querySelector(".continue-btn-one")
let feedbackcloseBtn= document.querySelector(".feedback-closeBtn")
let closeBtn= document.querySelector(".closeBtn")
let gotItBtn=document.querySelector(".gotIt-btn")
let moneyEl=document.querySelector("#money")
let personEl=document.querySelector("#person")
let pledgeValue=document.querySelector(".pledge-value")
let menuBtn=document.querySelector(".menu-btn")
let openMenu=document.querySelector(".open-menu")
let closeMenu= document.querySelector(".close-menu")
let menuNav=document.querySelector(".header-right-nav")


/* Pledge Modal */
pledgeBtn.addEventListener("click",()=>{
    modal.style.display="block"
})

closeBtn.addEventListener("click",()=>{
    modal.style.display="none"
})

/*Feedback Modal */
continueBtn.addEventListener("click",()=>{
    feedbackModal.style.display="block"

   gather()

})


continueBtnOne.addEventListener("click",()=>{
    feedbackModal.style.display="block"
})
continueBtnTwo.addEventListener("click",()=>{
    feedbackModal.style.display="block"
})

feedbackcloseBtn.addEventListener("click",()=>{
    feedbackModal.style.display="none"
})

/*Got It Button */
gotItBtn.addEventListener("click",()=>{
    modal.style.display="none"
    feedbackModal.style.display="none"
})

menuBtn.addEventListener("click",()=>{
 if(closeMenu.classList.contains(".active")){
    closeMenu.classList.toggle(".active")
    menuNav.style.display="block"
    closeMenu.style.display="block"
    openMenu.style.display="none"
 }else{
    closeMenu.classList.toggle(".active")
    menuNav.style.display="none"
    closeMenu.style.display="none"
    openMenu.style.display="block"
 }
})



