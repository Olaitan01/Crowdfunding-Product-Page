let pledgeBtn=document.querySelector(".backBtn")
let modal=document.querySelector(".modal")
let feedbackModal= document.querySelector(".feedback-modal")
let continueBtn=document.querySelectorAll(".continue-btn")

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
for (let i=0;i<continueBtn.length;i++){
    continueBtn[i].addEventListener("click",()=>{
        feedbackModal.style.display="block"
    })
}





feedbackcloseBtn.addEventListener("click",()=>{
    feedbackModal.style.display="none"
})

/*Got It Button */
gotItBtn.addEventListener("click",()=>{
    modal.style.display="none"
    feedbackModal.style.display="none"
})

menuBtn.addEventListener("click",()=>{
    if(closeMenu.style.display==="block"){
        openMenu.style.display="block"
        closeMenu.style.display="none"
        menuNav.style.display="none"
        
        console.log("wrong")
    }else{
       
        openMenu.style.display="none"
        closeMenu.style.display="block"
        menuNav.style.display="block"
        
        console.log("right")
    }
})



