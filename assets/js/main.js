let btnMenu = document.querySelector('.menu-btn');
let sidebar = document.querySelector('.sidebar');
let headerBg = document.querySelector('.header-background');
// récupération de la taille du bg pour ajuster la taille de la sidebar
let headerBgSize = headerBg.offsetHeight;
let height;
// 

let btnClose = document.querySelector('.btn-close');

window.addEventListener('load', () => {
    height = headerBgSize + "px";
    sidebar.setAttribute('style', 'height: ' + height);
})

window.addEventListener('resize', () => {
    headerBgSize = headerBg.offsetHeight;
    height = headerBgSize + "px";
    sidebar.setAttribute('style', 'height: ' + height);
    console.log(headerBgSize + "px");
})

btnMenu.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');
    sidebar.classList.toggle('sidebar-visible');
})

btnClose.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');
    sidebar.classList.toggle('sidebar-visible');
})

