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
let fund=89914;
let person=5007


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

function gather(){
    fund +=1;
    person+=1
    moneyEl.textContent= `$ ${fund}`;
    personEl.textContent=`${person}`
    
}
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



