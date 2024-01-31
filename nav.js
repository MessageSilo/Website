const primaryNav = document.querySelector('.primary-navigation'); 
const navToggle = document.querySelector('.mobile-nav-toggle');
const header = document.querySelector(".primary-header");
const navLogo = document.querySelector(".navbar-logo");
const mobilNavLogo = document.querySelector(".mobile-navbar-logo");

navToggle.addEventListener('click', function() {
    const visibility = primaryNav.getAttribute('data-visible');

    if (visibility === 'false') {
        primaryNav.setAttribute('data-visible', 'true');
        navToggle.setAttribute('aria-expanded', 'true');
        header.classList.remove("scrolled");   
        navLogo.classList.add("u-hidden");   
        mobilNavLogo.classList.remove("u-hidden");  
    }else if(visibility === 'true'){
        primaryNav.setAttribute('data-visible', 'false');
        navToggle.setAttribute('aria-expanded', 'false');
        setTimeout(()=>{navLogo.classList.remove("u-hidden");}, 300); 
        mobilNavLogo.classList.add("u-hidden");  
        if(window.scrollY > 0){
          setTimeout(()=>{header.classList.add("scrolled");}, 300);}
          
    }else{
        throw new Error('Unexpected value for data-visible attribute');
    }

});

document.addEventListener("scroll", ()=>{
  
  const visibility = primaryNav.getAttribute('data-visible');
  if(visibility === 'false'){
    if(window.scrollY > 0){
      header.classList.add("scrolled");
    }else{
      header.classList.remove("scrolled");
    }
  }

  

}
)

// Resize Animation Bug Fix
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});


