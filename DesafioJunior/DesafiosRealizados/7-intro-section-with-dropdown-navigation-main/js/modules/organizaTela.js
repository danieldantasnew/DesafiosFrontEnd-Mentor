export default function organizaTela(){
    const menu = document.querySelector('[data-tela="menu"]');
    const botoes = document.querySelector('[data-tela="botoes"]');
    const sideRight = document.querySelector('[data-menu="rightSide"]');
    let tamTela = window.matchMedia('(min-width: 789px)').matches;
    
    verificaTela(tamTela, menu, sideRight, botoes);
    
    
    window.onresize = ()=>{
        let tamTela = window.matchMedia('(min-width: 789px)').matches;
        verificaTela(tamTela, menu, sideRight, botoes);
    }

    function alteraDropdown(){
        
    }
    
    function verificaTela(tamTela, elementoPai, elementoPai2, elementoFilho){
        if(tamTela){
            elementoPai.appendChild(elementoFilho);
        }
        else{
            elementoPai2.appendChild(elementoFilho);
        }
    }
}

