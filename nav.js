const primaryNav = document.querySelector('.primary-navigation'); 
const navToggle = document.querySelector('.mobile-nav-toggle');
const header = document.querySelector(".primary-header");
const navLogo = document.querySelector(".navbar-logo");
const mobilNavLogo = document.querySelector(".mobile-navbar-logo");

navToggle.addEventListener('click', function() {
  
  const visibility = primaryNav.getAttribute('data-visible');

    if (visibility === 'false') {
      openMobileNav();
    }else if(visibility === 'true'){
      closeMobileNav();
          
    }else{
        throw new Error('Unexpected value for data-visible attribute');
    }

});

// Close Mobile Nav
function closeMobileNav(){
  primaryNav.setAttribute('data-visible', 'false');
  navToggle.setAttribute('aria-expanded', 'false');
  setTimeout(()=>{navLogo.classList.remove("u-hidden");}, 300); 
  mobilNavLogo.classList.add("u-hidden");  
  if(window.scrollY > 0){
    setTimeout(()=>{header.classList.add("scrolled");}, 300);}
}

function openMobileNav(){
  primaryNav.setAttribute('data-visible', 'true');
  navToggle.setAttribute('aria-expanded', 'true');
  header.classList.remove("scrolled");   
  navLogo.classList.add("u-hidden");   
  mobilNavLogo.classList.remove("u-hidden");  
}




let scrollTimeout;
document.addEventListener("scroll", () => {
  const visibility = primaryNav.getAttribute('data-visible');
  
  // Töröld az előző timeout-ot, ha van
  clearTimeout(scrollTimeout);
  
  if (visibility === 'false' && window.scrollY > 0) {
    // Állíts be egy új timeout-ot
    scrollTimeout = setTimeout(() => {
      header.classList.add("scrolled");
    }, 200);
  } else {
    // Ha felfelé görgetsz, vagy a mobile-nav nyitva van, akkor azonnal töröld a "scrolled" class-t
    header.classList.remove("scrolled");
  }
});

// Resize Animation Bug Fix
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});
//-------------------------------------------------------

//Scroll Reveal Animations 
ScrollReveal().reveal('.hero', { duration: 1500, reset: true ,distance: "100px"})
ScrollReveal().reveal('.divider', { duration: 1500, reset: true,distance: "100px"})
ScrollReveal().reveal('.message', { duration: 1500 , reset: true,distance: "100px"})
ScrollReveal().reveal('.features', { duration: 1500 , reset: true,distance: "100px"})
ScrollReveal().reveal('.card__container', { duration: 1500 , reset: true,distance: "100px"})
ScrollReveal().reveal('.about', { duration: 1500 , reset: true,distance: "100px"})
ScrollReveal().reveal('.try-it', { duration: 1500 , reset: true,distance: "100px"})
ScrollReveal().reveal('.api', { duration: 1500 , reset: true,distance: "100px"})
ScrollReveal().reveal('.github', { duration: 1500 , reset: true,distance: "100px"})
ScrollReveal().reveal('.footer__container', { duration: 1500 , reset: true,distance: "100px"})
ScrollReveal().reveal('.footer__copyright', { duration: 1500 , reset: true,distance: "100px"})
//--------------------------------------------------------