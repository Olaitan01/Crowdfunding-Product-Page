let pledgeBtn = document.querySelector(".backBtn")
let modal = document.querySelector(".modal")
let feedbackModal = document.querySelector(".feedback-modal")
let continueBtn = document.querySelectorAll(".continue-btn")
let bookmarkBtn = document.querySelector("#bookmark-btn")
let feedbackcloseBtn = document.querySelector(".feedback-closeBtn")
let closeBtn = document.querySelector(".closeBtn")
let gotItBtn = document.querySelector(".gotIt-btn")
let moneyEl = document.querySelector("#money")
let personEl = document.querySelector("#person")
let pledgeValue = document.querySelector(".pledge-value")
let menuBtn = document.querySelector(".menu-btn")
let openMenu = document.querySelector(".open-menu")
let closeMenu = document.querySelector(".close-menu")
let menuNav = document.querySelector(".header-right-nav")
let hit = document.querySelector(".click")
let people = 5007;
let fund=914

/* Bookmark Button*/
bookmarkBtn.addEventListener("click", () => {
    localStorage.setItem("bookmark", window.location.href);
    alert("Bookmarked");
    let bookmark = localStorage.getItem("bookmark");
    if (bookmark) {
        window.location.href = bookmark
    }
})

/* Pledge Modal */
pledgeBtn.addEventListener("click", () => {
    modal.style.display = "block"
})

closeBtn.addEventListener("click", () => {
    modal.style.display = "none"
})

/*Feedback Modal */
for (let i = 0; i < continueBtn.length; i++) {
    continueBtn[i].addEventListener("click", () => {
        feedbackModal.style.display = "block";
        move();
        backers();
        valueEl();

    })
}
/* TOTAL BACKER*/
function backers() {

    people += 1;
    personEl.innerHTML =`${people}`;

  

}

/*Value intake */
function valueEl(){
    let inputEl= pledgeValue.value;
        fund += parseInt(inputEl);
       
        if(isNaN(fund)){
            moneyEl.innerHTML="$89,914";
            
    
        }else{
            fund += parseInt(inputEl)
            moneyEl.innerHTML=`$89,${fund}`;
        }
        
           
}

/*hit.addEventListener("click",()=>{
    move()
})*/

let i = 0;
function move() {
    if (i == 0) {
        let i = 1;
        let width = 70;
        let elem = document.querySelector(".progress-bar");
        let id = setInterval(progress, 100);

        function progress() {
            if (width >= 95) {
                clearInterval(id)
                i = 0
            } else {
                width++;
                elem.style.width = width + "%";

            }
        }
    }
}




feedbackcloseBtn.addEventListener("click", () => {
    feedbackModal.style.display = "none"
})

/*Got It Button */
gotItBtn.addEventListener("click", () => {
    modal.style.display = "none"
    feedbackModal.style.display = "none"
})

menuBtn.addEventListener("click", () => {
    if (closeMenu.style.display === "block") {
        openMenu.style.display = "block"
        closeMenu.style.display = "none"
        menuNav.style.display = "none"

        console.log("wrong")
    } else {

        openMenu.style.display = "none"
        closeMenu.style.display = "block"
        menuNav.style.display = "block"

        console.log("right")
    }
})



