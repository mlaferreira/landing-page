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

});

// TESTIMONIALS
let testimonials = [
    { quote: '"Mais do que nunca, os animais de estimação são tratados como membros da familia."', origin: 'cbs.svg'},
    { quote: '"DogDev é um serviço de entrega direto ao consumidor, preparado na hora com ingredientes 100% reais, Ingredientes que os humanos reconheceriam."', origin: 'forbes.svg'},
    { quote: '"DogDev usa ingredientes simples e limpos em seus pratos."', origin: 'fox.svg'},
    { quote: '"Vejo você[Marcelo] como um verdadeiro herói"', origin: 'sharktank.svg'}
];
let testimonialQuote = document.querySelector('.testimonials .quote');
let testimonialIcons = document.querySelector('.testimonials .icons');

for(let tindex in testimonials){
    let img = document.createElement('img');
    img.setAttribute('src', './assets/images/' + testimonials[parseInt(tindex)].origin);
    img.style.cursor = 'pointer';
    img.addEventListener('click', (e) => {
        e.preventDefault();
        fillTestimonial(parseInt(tindex));

    });
    testimonialIcons.appendChild(img);
}
let currentTestimonail = 0;
let testimonialTimer;

const fillTestimonial = (index) => {
    clearTimeout(testimonialTimer);
    currentTestimonail = index;
    testimonialQuote.innerHTML = testimonials[currentTestimonail].quote;
    let imgs = testimonialIcons.querySelectorAll('img');
    for(let img of imgs){
        img.style.opacity = .2;
    };
    imgs[currentTestimonail].style.opacity = 1;
    testimonialTimer = setTimeout((nextTestimonial), 3000);
};

const nextTestimonial = () => {
    if(testimonials[currentTestimonail + 1]){
        fillTestimonial(currentTestimonail + 1);
    }else{
        fillTestimonial(0);
    }
}
nextTestimonial();
