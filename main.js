//change nav style

window.addEventListener('scroll', ()=> {
    document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0);
})

// contact buttons

const textButton = document.querySelectorAll('.contact__btn');

textButton.forEach(textButton  => {
    let text = textButton.querySelector('p');

    text.innerHTML = text.innerHTML.split('').map((character, index) => `<span style="transform: rotate(${index * 12}deg)">${character}</span>`).join('')
});



const nav = document.querySelector('.nav__link');
const openNavBtn = document.querySelector('#nav__toggle-open');
const closeNavBtn = document.querySelector('#nav__toggle-close');

const openNav = () => {
    nav.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
};

openNavBtn.addEventListener('click', openNav);

const closeNav = () => {
    nav.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
};

closeNavBtn.addEventListener('click', closeNav);




// close nav menu on click
if(document.body.clientWidth < 1024){
    nav.querySelectorAll('li a').forEach(navLink => {
        navLink.addEventListener('click', closeNav)
    })
}