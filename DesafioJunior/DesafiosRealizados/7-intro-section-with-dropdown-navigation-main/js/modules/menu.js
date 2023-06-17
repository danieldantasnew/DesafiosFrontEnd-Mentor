import * as clickMenu from "./dropdownItens.js";

export default function initMenuMobile(){
    const rightSide = document.querySelectorAll('[data-menu]');
    const botaoMenu = document.querySelector('[data-menu="botao-menu"]')
    const modal = document.querySelector('[data-menu="modal"]');

    botaoMenu.addEventListener('click', handleMenu);
    modal.addEventListener('click', handleMenu);

    function handleMenu(){
        rightSide.forEach((item)=>{
            item.classList.toggle('active');
        })

        if(!botaoMenu.classList.contains('active')){
            const novoAtributo = 'images/icon-arrow-up.svg';
            const velhoAtributo = 'images/icon-arrow-down.svg';

            clickMenu.dropdown.forEach(item=>{
                item.classList.remove('active');
                item.nextElementSibling.classList.remove('active');

                if(item.classList.contains('active')){
                    this.lastChild.setAttribute('src', novoAtributo);
                }
                else{
                    item.lastChild.setAttribute('src', velhoAtributo);
                }
            }); 
        }
    }
}

