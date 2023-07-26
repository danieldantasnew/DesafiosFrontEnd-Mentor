function DomElement(seletor){
   
    this.elementos = function(){
        return document.querySelector(seletor);
    }

    this.addClasse = function(classe){
        this.elementos().classList.add(classe);
    }

    this.removeClasse = function(classe){
        this.elementos().classList.remove(classe);
    }
}


function callbackCartao(){
    const numCartao = document.querySelector('#numero-cartao-input');
    //formatar com espaços usando expressão regular e retirar as letras e outros caracteres tanto no numero do cartão como no cvc.

    const regex = /\D/g
    numCartao.value = numCartao.value.replace(regex, '')

    const regexpOrganizaNumero = /(\d{4})(\d{4})(\d{4})(\d{4})/g
    numCartao.value = numCartao.value.replace(regexpOrganizaNumero, '$1 $2 $3 $4')
}


function error(boolean, index){
    const allErro = document.querySelectorAll('.msg-error');
    const mes = new DomElement('#data-mes')
    const ano = new DomElement('#data-ano')


    if(boolean){
        allErro[index].classList.add('active');
    }
    else{
        if(!ano.elementos().classList.contains('compara') && !mes.elementos().classList.contains('compara')){
            allErro[index].classList.remove('active');
        }
    }
}

function errorName(){
    const nome = new DomElement('#nome')
    const regexp = /[^a-z A-Z]+/g
    nome.elementos().value = nome.elementos().value.replace(regexp, '')

    if(nome.elementos().value.length <= 0){
        error(true, 0);
        nome.elementos().style.border = '1px solid var(--vermelho)';
    }
    else{
        error(false, 0);
        nome.elementos().style.border = '';
    }
}

function errorMonth(){
    const mes = new DomElement('#data-mes');


    if(mes.elementos().value.length > 2 || mes.elementos().value.length <= 0 || mes.elementos().value <= 0 || mes.elementos().value > 12){
        error(true, 2);
        mes.elementos().style.border = '1px solid var(--vermelho)';
        mes.addClasse('compara')
        mes.elementos().value = mes.elementos().value.slice(0,2)
    }
    else{
        mes.removeClasse('compara'); //colocar para remover a classe antes de ativar a função error senão quando for acionada a função ainda não terá removido a classe e não funcionará
        error(false, 2);
        mes.elementos().style.border = '';
    }

}
//Falta verificar se o vencimento do ano do cartão é menor que o ano atual
function errorYear(){
    const ano = new DomElement('#data-ano')
    ano.elementos().value = +ano.elementos().value.slice(0,2);
    
    if(ano.elementos().value.length > 4 || ano.elementos().value.length <= 0){
        error(true, 2);
        ano.elementos().style.border = '1px solid var(--vermelho)';
        ano.elementos().classList.add('compara');
    }
    else{
        ano.elementos().classList.remove('compara'); //colocar para remover a classe antes de ativar a função error senão quando for acionada a função ainda não terá removido a classe e não funcionará
        error(false, 2);
        ano.elementos().style.border = '';
    }
}

function errorCVC(){
    const cvc = new DomElement('#cvc')

    if(cvc.elementos().value.length < 3 || cvc.elementos().value.length > 3){
        error(true, 3);
        cvc.elementos().style.border = '1px solid var(--vermelho)';
    }
    else{
        error(false, 3);
        cvc.elementos().style.border = '';
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
    const mesInput = document.querySelector('#data-mes');
    const anoInput = document.querySelector('#data-ano');

    //frente cartão

    numCartaoInput.addEventListener('input', () =>{
        frenteCartao.classList.add('js-cartao-animation');
    });

    nomeCartaoInput.addEventListener('input', () =>{
        frenteCartao.classList.add('js-cartao-animation');
    });

    mesInput.addEventListener('input', () =>{
        frenteCartao.classList.add('js-cartao-animation');
    });

    anoInput.addEventListener('input', () =>{
        frenteCartao.classList.add('js-cartao-animation');
    });

    // traseira cartão

    cvcInput.addEventListener('input', () =>{
        traseiraCartao.classList.add('js-cartao-animation');
        frenteCartao.classList.remove('js-cartao-animation');
    });


    document.addEventListener('click', (evento)=>{
        if(!cvcInput.contains(evento.target)){
            traseiraCartao.classList.remove('js-cartao-animation');
        }
        const valorBoolean = evento.target.classList.contains('js-frente-cartao');
        
        if(!valorBoolean){
            frenteCartao.classList.remove('js-cartao-animation');
        };
    })

    //Arrumar para verificar se é filho de algum elementto da parte da frente do cartão se não for recuar o cartão na animação
}

animationCard();