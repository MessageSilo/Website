const primaryNav = document.querySelector('.primary-navigation'); 
const navToggle = document.querySelector('.mobile-nav-toggle');
const header = document.querySelector(".primary-header");
const navLogo = document.querySelector(".navbar-logo");
const mobilNavLogo = document.querySelector(".mobile-navbar-logo");
const heroImg = document.querySelector(".hero__right img");

function getDistance(x1, y1, x2, y2) {
  const xDistance = x2 - x1;
  const yDistance = y2 - y1;
  return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}


  
  document.addEventListener('mousemove', function (e) {
    if (window.innerWidth < 1024){
      heroImg.style.transform = `translate(0px, 0px)`;
      return;
    }
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Adjust the position of the hero right image based on the cursor position
    const offsetX = 30; // Adjust this value to control the range of movement
    const offsetY = 30; // Adjust this value to control the range of movement

    const imgX = (mouseX / window.innerWidth) * offsetX;
    const imgY = (mouseY / window.innerHeight) * offsetY;

    // Apply the new position to the hero right image
    heroImg.style.transform = `translate(${-imgX}px, ${-imgY}px)`;
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
  

  clearTimeout(scrollTimeout);
  
  if (visibility === 'false' && window.scrollY > 0) {
   
    scrollTimeout = setTimeout(() => {
      header.classList.add("scrolled");
    }, 200);
  } else {
   
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

const scrollOptions = {
  duration: 700,distance: "100px", easing: 'ease-in-out',
}
// Hero Section
ScrollReveal().reveal('.hero__right', { ...scrollOptions, delay: 500,})
ScrollReveal().reveal('.hero__left h3', {...scrollOptions, origin: 'left', delay: 1000})
ScrollReveal().reveal('.hero__left h1', {...scrollOptions, origin: 'left', delay: 1500})
ScrollReveal().reveal('.hero__left p', {...scrollOptions, origin: 'left', delay: 2000})
ScrollReveal().reveal('.hero__left button', {...scrollOptions, delay: 2500})


// Divider Section
ScrollReveal().reveal('.service-container--1', { ...scrollOptions, origin: 'left', delay: 500})
ScrollReveal().reveal('.service-container--2', { ...scrollOptions, origin: 'left', delay: 1000})
ScrollReveal().reveal('.service-container--3', { ...scrollOptions, origin: 'left', delay: 1500})


// Message Section 
ScrollReveal().reveal('.message', { ...scrollOptions, delay: 500})

// Card Section
ScrollReveal().reveal('.card-1', { ...scrollOptions, delay: 500, mobile: false})
ScrollReveal().reveal('.card-2', { ...scrollOptions, delay: 1000, mobile: false})
ScrollReveal().reveal('.card-3', { ...scrollOptions, delay: 1500, mobile: false})

ScrollReveal().reveal('.card-1', { ...scrollOptions, delay: 100, mobile: true})
ScrollReveal().reveal('.card-2', { ...scrollOptions, delay: 200, mobile: true})
ScrollReveal().reveal('.card-3', { ...scrollOptions, delay: 300, mobile: true})



// About Section
ScrollReveal().reveal('.about__illustration-container', { ...scrollOptions, origin: 'left', delay: 300})
ScrollReveal().reveal('.about__text-container h2', { ...scrollOptions, origin: 'right', delay: 600})
ScrollReveal().reveal('.about__text-container p', { ...scrollOptions, origin: 'right', delay: 900})
ScrollReveal().reveal('.about__text-container img', { ...scrollOptions, delay: 1500})

//try it section
ScrollReveal().reveal('.try-it__text-container h2', { ...scrollOptions, origin: 'left', delay: 500})
ScrollReveal().reveal('.try-it__text-container p', { ...scrollOptions, origin: 'left', delay: 1000})
ScrollReveal().reveal('.try-it__text-container img', { ...scrollOptions, delay: 1500})
ScrollReveal().reveal('.try-it__illustration-container', { ...scrollOptions, delay: 1500})

//API Section
ScrollReveal().reveal('.api__illustration-container', { ...scrollOptions, origin: 'left', delay: 500})
ScrollReveal().reveal('.api__text-container h2', { ...scrollOptions, origin: 'right', delay: 1000})
ScrollReveal().reveal('.api__text-container p', { ...scrollOptions, origin: 'right', delay: 1500})
ScrollReveal().reveal('.api__text-container img', { ...scrollOptions, delay: 2000})

//github section
ScrollReveal().reveal('.github-banner h2', { ...scrollOptions, origin: 'left', delay: 500})
ScrollReveal().reveal('.github-banner .github-buttons', { ...scrollOptions, origin: 'right', delay: 1000})

//footer section
ScrollReveal().reveal('.footer__container', { ...scrollOptions,delay: 500})
//--------------------------------------------------------