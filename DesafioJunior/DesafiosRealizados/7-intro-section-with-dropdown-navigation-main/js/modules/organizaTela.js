export default function organizaTela(){

    function organizaLayoutMobile(){
        const menu = document.querySelector('[data-tela="menu"]');
        const botoes = document.querySelector('[data-tela="botoes"]');
        const sideRight = document.querySelector('[data-menu="rightSide"]');
        
        verificaTela(menu, sideRight, botoes);
        
        
        window.onresize = ()=>{
            verificaTela(menu, sideRight, botoes);
        }
    
    }
    
    function verificaTela(elementoPai, elementoPai2, elementoFilho){
        let tamTela = window.matchMedia('(min-width: 789px)').matches;

        if(tamTela){
            elementoPai.appendChild(elementoFilho);
        }
        else{
            elementoPai2.appendChild(elementoFilho);
        }
    }

    organizaLayoutMobile();
}

