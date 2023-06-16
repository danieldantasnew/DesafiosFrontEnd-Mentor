export default function initMenuMobile(){
    const rightSide = document.querySelectorAll('[data-menu]');

    const botaoMenu = document.querySelector('[data-menu="botao-menu"]')
    
    botaoMenu.addEventListener('click', handleMenu);
    
    function handleMenu(){
        rightSide.forEach((item)=>{
            item.classList.toggle('active');
        })
    }
}

