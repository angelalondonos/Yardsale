const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.destop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}

