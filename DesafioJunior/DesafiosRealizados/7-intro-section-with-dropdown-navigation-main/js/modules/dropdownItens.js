export default function dropDownItens(){

}

const dropdown = document.querySelectorAll('[data-dropDown]');

dropdown.forEach((item)=>{
    item.addEventListener('click', handleItem);
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