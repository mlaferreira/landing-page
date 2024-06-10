// js do menu abrir e fecha quando estiver no celular
// MENU
let menuOpener = document.querySelector('.header-menu-opener');
let nav        = document.querySelector('header nav');
let closeIcon  = document.querySelector('.close-icon');
let hamburgerIcon = document.querySelector('.hamburger-icon');
menuOpener.addEventListener('click' , (e) =>{
    e.preventDefault();
    if(nav.classList.contains('opened')){
        nav.classList.remove('opened');
        closeIcon.style.display = 'none';
        hamburgerIcon.style.display = 'flex';

    }else{
        nav.classList.add('opened');
        closeIcon.style.display = 'flex';
        hamburgerIcon.style.display = 'none';

        
    }


})
