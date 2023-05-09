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