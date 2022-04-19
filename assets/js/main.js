// =================== MENU Show Y Hidden =========================
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

// =========== MENU SHOW ==============
// Validate if constant exists
if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })

}


// ====================== MENU HIDDEN ==========================
// Validate if constant exists
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}


// ========================= REMOVE MENU MOBILE =============================
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    // const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


// ========================== ACORDIAN SKILLS ===========================



// ================ QUALIFICATION TABS ==========================



// ======================= SERVICES MODAL =============================
const modalViews = document.querySelectorAll('.project__modal'),
    modalBtns = document.querySelectorAll('.project__button'),
    modalCloses= document.querySelectorAll('.project__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn,i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', ()=> {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})