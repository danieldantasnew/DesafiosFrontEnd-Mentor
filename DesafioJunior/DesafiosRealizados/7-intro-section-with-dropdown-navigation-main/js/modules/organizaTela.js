export default function organizaTela(){

}

const menu = document.querySelector('[data-tela="menu"]');
const botoes = document.querySelector('[data-tela="botoes"]');
const sideRight = document.querySelector('[data-menu="rightSide"]');
const tamTela = window.matchMedia('(min-width: 788px)').matches;



window.onresize = ()=>{
    verificaTela(tamTela, menu, sideRight, elementoFilho)
}

function verificaTela(tamTela, elementoPai, elementoPai2, elementoFilho){
    if(tamTela){
        elementoPai.appendChild(elementoFilho);
    }
    else{
        elementoPai2.appendChild(elementoFilho);
    }
}