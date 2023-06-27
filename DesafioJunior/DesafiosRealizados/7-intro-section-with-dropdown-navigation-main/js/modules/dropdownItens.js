export function dropDownItens(){
    const dropdown = document.querySelectorAll('[data-dropDown]');
    const drop = document.querySelectorAll('[data-drop]')
    const events = ['click'];

    dropdown.forEach((item, index)=>{
        events.forEach(evento =>{
            item.addEventListener(evento, ()=>{
                handleItem(event, index)
            });
        })
    });
    
    function handleItem(event, index){
        if(event.target.hasAttribute('data-atbID')){
            event.currentTarget.classList.toggle('active');
            drop[index].classList.toggle('active');
        }
        
        arrowImage(event.currentTarget);    
    }
    
    alteraDropdown();
}

export function removeClasse(botaoMenu, dropdown){
    if(!botaoMenu.classList.contains('active')){
        dropdown.forEach(item=>{
            item.classList.remove('active');
            item.nextElementSibling.classList.remove('active');
        }); 
    }
}

export function alteraDropdown(){
    const dropdownPai = document.querySelectorAll('[data-dropDown]');
    const dropFilho = document.querySelectorAll('[data-drop]');
    const dropPaiLista = document.querySelector('[data-menu="lista-menu"]');
    const insereAntesLista = document.querySelectorAll('[data-before]');
    let tamTela = window.matchMedia('(min-width: 789px)').matches;


    if(tamTela){
        dropdownPai.forEach((dropPai,index) =>{
            const primeiroFilhoIda = dropPai.firstChild;
            dropPai.insertBefore(dropFilho[index], primeiroFilhoIda);
        });
    }
    else{
        dropPaiLista.insertBefore(dropFilho[0],insereAntesLista[0]);
        dropPaiLista.insertBefore(dropFilho[1],insereAntesLista[1]);
    }
}

export function arrowImage(item){
    const novoAtributo = 'images/icon-arrow-up.svg';
    const velhoAtributo = 'images/icon-arrow-down.svg';

    if(item.classList.contains('active')){
        item.lastChild.setAttribute('src', novoAtributo);
    }
    else{
        item.lastChild.setAttribute('src', velhoAtributo);
    }
}