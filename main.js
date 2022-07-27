const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.destop-menu');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');


/*Evento to click*/
menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click', toggleCartAside);


/* Functions for addEventListener */
function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive");
    aside.classList.add("inactive");
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle("inactive");
    aside.classList.add("inactive");
}

function toggleCartAside(){
    aside.classList.toggle("inactive");
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
}


