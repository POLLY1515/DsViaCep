import * as modallController from './modal-controller.js'

export function init(){
    const contacLink = document.querySelector(".contact-link");
    contacLink.addEventListener('click',handleContactLinkClick);
}

function handleContactLinkClick(event){
    event.preventDefault();
    modallController.showModal();
}