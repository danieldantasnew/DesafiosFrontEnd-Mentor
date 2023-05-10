function callbackCartao(){
    const numCartao = document.querySelector('#numero-cartao-input');
    //formatar com espaços usando expressão regular e retirar as letras e outros caracteres.
}

function error(boolean, index){
    const allErro = document.querySelectorAll('.msg-error');
    const mes = document.querySelector('#data-mes');
    const ano = document.querySelector('#data-ano');


    if(boolean){
        allErro[index].classList.add('active');
    }
    else{
        if(!ano.classList.contains('compara') && !mes.classList.contains('compara')){
            allErro[index].classList.remove('active');
        }
    }
}

function errorName(){
    const nome = document.querySelector('#nome');

    if(nome.value.length <= 0){
        error(true, 0);
        nome.style.border = '1px solid var(--vermelho)';
    }
    else{
        error(false, 0);
        nome.style.border = '';
    }
}

function errorMonth(){
    const mes = document.querySelector('#data-mes');


    if(mes.value.length > 2 || mes.value.length <= 0 || mes.value <= 0 || mes.value > 12){
        error(true, 2);
        mes.style.border = '1px solid var(--vermelho)';
        mes.classList.add('compara');

    }
    else{
        mes.classList.remove('compara'); //colocar para remover a classe antes de ativar a função error senão quando for acionada a função ainda não terá removido a classe e não funcionará
        error(false, 2);
        mes.style.border = '';
    }

}

function errorYear(){
    const ano = document.querySelector('#data-ano');
    
    if(ano.value.length > 4 || ano.value.length <= 0){
        error(true, 2);
        ano.style.border = '1px solid var(--vermelho)';
        ano.classList.add('compara');
    }
    else{
        ano.classList.remove('compara'); //colocar para remover a classe antes de ativar a função error senão quando for acionada a função ainda não terá removido a classe e não funcionará
        error(false, 2);
        ano.style.border = '';
    }
}

function errorCVC(){
    const cvc = document.querySelector('#cvc');

    if(cvc.value.length < 3 || cvc.value.length > 3){
        error(true, 3);
        cvc.style.border = '1px solid var(--vermelho)';
    }
    else{
        error(false, 3);
        cvc.style.border = '';
    }
}

function dadosCartao(){
    const numCartaoInput = document.querySelector('#numero-cartao-input');
    const nomeCartaoInput = document.querySelector('#nome');
    const mesInput = document.querySelector('#data-mes');
    const anoInput = document.querySelector('#data-ano');
    const cvcInput = document.querySelector('#cvc');

    //Frente cartão
    const nomeCartao = document.querySelector('#nome-cartao');
    const cvcCartao = document.querySelector('#cvc-cartao');
    const numfrenteCartao = document.querySelector('#numero-cartao');
    const mesCartao = document.querySelector('.mes-frente-cartao');
    const anoCartao = document.querySelector('.ano-frente-cartao');

    numCartaoInput.addEventListener('input', ()=>{
        numfrenteCartao.innerText = numCartaoInput.value;
    });

    nomeCartaoInput.addEventListener('input', ()=>{
        nomeCartao.innerText = nomeCartaoInput.value.toUpperCase();
    });

    mesInput.addEventListener('input', () =>{
        mesCartao.innerText = `${mesInput.value}/`;
    });

    anoInput.addEventListener('input', ()=>{
        anoCartao.innerText = anoInput.value;
    });

    cvcInput.addEventListener('input', ()=>{
        cvcCartao.innerText = cvcInput.value;
    });

}

dadosCartao();

function animationCard(){
    const frenteCartao = document.querySelector('.frente-cartao');
    const traseiraCartao = document.querySelector('.traseira-cartao');


    const numCartaoInput = document.querySelector('#numero-cartao-input');
    const nomeCartaoInput = document.querySelector('#nome');
    const cvcInput = document.querySelector('#cvc');

    cvcInput.addEventListener('input', () =>{
        traseiraCartao.classList.add('js-cartao-animation');
    });

    document.addEventListener('click', (evento)=>{
        if(!cvcInput.contains(evento.target)){
            traseiraCartao.classList.remove('js-cartao-animation');
        }
    })

}

animationCard();