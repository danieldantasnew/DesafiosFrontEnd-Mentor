import * as dropDownFunction from "./dropdownItens.js";

export default function initMenuMobile(){
    const rightSide = document.querySelectorAll('[data-menu]');
    const botaoMenu = document.querySelector('[data-menu="botao-menu"]')
    const dropdown = document.querySelectorAll('[data-dropDown]');
    const modal = document.querySelector('[data-menu="modal"]');
    const events = ['click'];

    events.forEach(evento=>{
        botaoMenu.addEventListener(evento, handleMenu);
        modal.addEventListener(evento, handleMenu);
    })

    function handleMenu(){
        rightSide.forEach((item)=>{
            item.classList.toggle('active');
        })

        dropDownFunction.removeClasse(botaoMenu,dropdown);
    }
}