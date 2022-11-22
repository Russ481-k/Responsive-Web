const moreButton = document.querySelector('.info .metadata .moreButton');
const title = document.querySelector('.info .metadata .title');
const toggleButton = document.querySelector('.toggleButton');
const menu = document.querySelector('.menu');
const icon = document.querySelector('.icon');

moreButton.addEventListener('click', () => {
    moreButton.classList.toggle('clicked');
    title.classList.toggle('clamp');
})
toggleButton.addEventListener('click', () => {
menu.classList.toggle('active');  
icon.classList.toggle('active'); 
})