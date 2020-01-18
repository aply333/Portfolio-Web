
// Global Variables for Carousel
const slider = document.querySelector('.slider');
const linkAbout = document.querySelector('.linkAbout');
const linkHome = document.querySelector('.linkHome');
const linkProjects = document.querySelector('.linkProjects');
const linkContact = document.querySelector('.linkContact');

function carousell(value){
    return slider.style.transform = `translate(${value})`
    
};

linkAbout.addEventListener('click', () =>{
    slider.style.transform = 'translate(0)'
})
linkHome.addEventListener('click', () =>{
    slider.style.transform = 'translate(-25%)'
})
linkProjects.addEventListener('click', () =>{
    slider.style.transform = 'translate(-50%)'
})
linkContact.addEventListener('click', () => {
    slider.style.transform = 'translate(-75%)'
})