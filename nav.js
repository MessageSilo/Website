const primaryNav = document.querySelector('.primary-navigation'); 
const navToggle = document.querySelector('.mobile-nav-toggle');
const header = document.querySelector(".primary-header");

navToggle.addEventListener('click', function() {
    const visibility = primaryNav.getAttribute('data-visible');

    if (visibility === 'false') {
        primaryNav.setAttribute('data-visible', 'true');
        navToggle.setAttribute('aria-expanded', 'true');
        header.classList.remove("scrolled");        
    }else if(visibility === 'true'){
        primaryNav.setAttribute('data-visible', 'false');
        navToggle.setAttribute('aria-expanded', 'false');
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