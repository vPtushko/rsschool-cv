// (function(){
//     const header = document.querySelector('.header');
//     window.onscroll = () => {
//         if (window.pageYOffset > 50){
//             header.classList.add('header_active');
//         } else {
//             header.classList.remove('header_active');
//         }
//     };
// }());

function burger (){
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.navbar');
    const menuCloseItem = document.querySelector('.header__nav-close');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('navbar_active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('navbar_active');
    });
};


function openForm(){
    document.getElementById("form").style.display="block";
};

function create(){
    document.getElementById("reg").style.display="block";
    document.getElementById("form").style.display="none";
};

function logIn(){
    document.getElementById("form").style.display="block";
    document.getElementById("reg").style.display="none";
};
