import * as dropDownFunction from "./dropdownItens.js";

export default function outsideClick(){

}

let tamTela = window.matchMedia('(min-width: 789px)').matches;
const dropdownItens = document.querySelectorAll('[data-dropDown]');
const html = document.documentElement;



if(tamTela){
    dropdownItens.forEach(drop=>{
        drop.addEventListener('click', handleClick);
    });

    function handleClick() {
        
        html.addEventListener('click', ()=>{
            fechaListaMenu(this)

        });
    }

    function fechaListaMenu(thisDropItens){
        //pegar evento do html com this
    }
}

//dropDownFunction.removeClasse()