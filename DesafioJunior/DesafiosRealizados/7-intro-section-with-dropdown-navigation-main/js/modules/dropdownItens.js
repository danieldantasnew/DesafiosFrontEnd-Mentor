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
        const novoAtributo = 'images/icon-arrow-up.svg';
        const velhoAtributo = 'images/icon-arrow-down.svg';

        event.currentTarget.classList.toggle('active');
        drop[index].classList.toggle('active');
    
        if(event.currentTarget.classList.contains('active')){
            event.currentTarget.lastChild.setAttribute('src', novoAtributo);
        }
        else{
            event.currentTarget.lastChild.setAttribute('src', velhoAtributo);
        }
    }
    
    alteraDropdown();
}

export function removeClasse(botaoMenu, dropdown){
    if(!botaoMenu.classList.contains('active')){
        const novoAtributo = 'images/icon-arrow-up.svg';
        const velhoAtributo = 'images/icon-arrow-down.svg';

        dropdown.forEach(item=>{
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