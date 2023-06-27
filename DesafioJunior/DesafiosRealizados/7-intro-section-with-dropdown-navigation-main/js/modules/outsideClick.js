import * as dropDownFunction from "./dropdownItens.js";

export default function outsideClick(){
    let tamTela = window.matchMedia('(min-width: 789px)').matches;
    const dropdownItens = document.querySelectorAll('[data-dropDown]');
    const lista = document.querySelectorAll('[data-drop]');
    const html = document.documentElement;
    const elementos = {
        element: '',
    }
    
    if(tamTela){
        dropdownItens.forEach((drop)=>{
            drop.addEventListener('click', handleClick);
        });
    
        function handleClick() {
            elementos.element = this;
            html.addEventListener('click', fechaListaMenu);
        }
        
        function fechaListaMenu(event){
            if(!elementos.element.contains(event.target)){
                dropdownItens.forEach((drop, index) =>{
                    lista[index].classList.remove('active');
                    drop.classList.remove('active');
                    dropDownFunction.arrowImage(drop);
                });
                html.removeEventListener('click', fechaListaMenu);
            }     
        }
    }
}

