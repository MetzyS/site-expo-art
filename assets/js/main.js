let body = document.querySelector('body');
let btnMenu = document.querySelector('.menu-btn');
let sidebar = document.querySelector('.sidebar');
let headerBg = document.querySelector('.header-background');
let navListItem = document.querySelectorAll('.nav-list__item');
// récupération de la taille du bg pour ajuster la taille de la sidebar
let headerBgSize = headerBg.offsetHeight;
let height;

let btnClose = document.querySelector('.btn-close');

let btnContact = document.querySelector('.btn-contact');

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

for (let i = 0; i < navListItem.length; i++) {
    navListItem[i].addEventListener('click', () => {
        sidebar.classList.toggle('hidden');
        sidebar.classList.toggle('sidebar-visible');
    })
}

// Template de la modal de contact
// let contactModal = document.createElement('div');
// contactModal.classList.add('modal');

// contactModal.innerHTML = `
//     <div class="contact-form">
//         <form action="">
//         <fieldset>
//             <legend><span>Formulaire de contact</span><span class="btn-close-form">x</span></legend>    
//                 <div class="input-container">
//                     <label for="nom">Nom</label>    
//                     <input type="text" class="form-input">
//                 </div>
            
//                 <div class="input-container">
//                     <label for="email">Email</label>    
//                     <input type="email" class="form-input">
//                 </div>

//                 <div class="input-container">
//                     <label for="message"></label>
//                     <textarea name="message" id="message" cols="5" rows="10"></textarea>
//                 </div>

//             </fieldset>
//         </form>
//     </div>
// `;


// btnContact.addEventListener('click', () => {
//     body.append(contactModal);
// })