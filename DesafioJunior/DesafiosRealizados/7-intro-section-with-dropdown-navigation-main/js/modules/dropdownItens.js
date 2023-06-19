export function dropDownItens(){
    const dropdown = document.querySelectorAll('[data-dropDown]');
    const events = ['click'];
    dropdown.forEach((item)=>{
        events.forEach(evento =>{
            item.addEventListener(evento, handleItem);
        })
    });
    
    function handleItem(event){
        const novoAtributo = 'images/icon-arrow-up.svg';
        const velhoAtributo = 'images/icon-arrow-down.svg';
    
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('active');
    
        if(this.classList.contains('active')){
            this.lastChild.setAttribute('src', novoAtributo);
        }
        else{
            this.lastChild.setAttribute('src', velhoAtributo);
        }
    }
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