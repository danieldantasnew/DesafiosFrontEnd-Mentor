function botaoClicado(){
    const botaoSubmit = document.querySelector('#botao-submit');
    const inputDia = document.querySelector('#dia');
    const inputMes = document.querySelector('#mes');
    const inputAno = document.querySelector('#ano');
    const dataAtual = new Date();
    const textoIdade = document.querySelectorAll('.idade');
    const designInput = document.querySelectorAll('.design-input')
    
    function pegaEntrada(evento){
        evento.preventDefault(); //evita que a página seja recarregada após o envio do formulário
        const requiredDateValid = document.querySelector('.required-valid-date')
        let valorDia = inputDia.value;
        let valorMes = inputMes.value;
        let valorAno = inputAno.value;
        const activeError = document.querySelectorAll('.required');
        const data = moment(`${valorAno}-${valorMes}-${valorDia}`, 'YYYY-MM-DD', true);

        if(valorDia == '' && valorMes == '' && valorAno == ''){
            activeError.forEach((elementoIndividual) =>{
                elementoIndividual.classList.add('active-error');
            });

            designInput.forEach(element => {
                element.style.border = '1px solid var(--vermelho-claro)'
            });
        }
        else{
            activeError.forEach((elementoIndividual) =>{
                elementoIndividual.classList.remove('active-error');
            });

            designInput.forEach(element => {
                element.style.border = ''
            });

            if(data.isValid()){
                function calculaIdade(ano, mes, dia){
                    let dataNascimento = new Date(ano, mes-1, dia);
                    let diferenca = dataAtual - dataNascimento;
    
                    const anos = Math.floor(diferenca / 1000 / 60 / 60 / 24 / 365);
                    textoIdade[0].innerHTML = `${anos}`;
    
                    const meses = Math.floor((diferenca / 1000 / 60 / 60 / 24) % 365 / 30);
                    textoIdade[1].innerHTML = `${meses}`;
    
                    const dias = Math.floor((diferenca / 1000 / 60 / 60 / 24) % 365 % 30);
                    textoIdade[2].innerHTML = `${dias}`;
    
                    /*mes e dias estão errados
                    - Fazer verificação se a data existe, por exemplo 31/04/2023 não existe
    
                    - Não permitir que seja enviado dados vazios
    
                    - Arrumar mobile
    
                    */
                }
                
                designInput.forEach(element => {
                    element.style.border = ''
                });
                requiredDateValid.classList.remove('active-error')
                calculaIdade(valorAno, valorMes, valorDia);
            }
            else{
                
                designInput.forEach(element => {
                    element.style.border = '1px solid var(--vermelho-claro)'
                });

                requiredDateValid.classList.add('active-error')

            }
        }

    };

    botaoSubmit.addEventListener('click', pegaEntrada);
}

botaoClicado();

/*Adiciona ou remove a classe no required*/
function alteraRequired(booleano, index){
    const requiredSelf = document.querySelectorAll('.required-self');

    if(booleano){
        requiredSelf[index].classList.add('active-error');    
    }

    else{
        requiredSelf[index].classList.remove('active-error');
    }
}

function validaDia(){
    const inputDia = document.querySelector('#dia');


    if(inputDia.value < 1 || inputDia.value > 31){
        alteraRequired(true, 0);
        inputDia.style.border = '1px solid var(--vermelho-claro)';
    }
    else{
        alteraRequired(false, 0);
        inputDia.style.border = '';
    }
}

function validaMes(){
    const inputMes = document.querySelector('#mes');

    if(inputMes.value < 1 || inputMes.value > 12){
        alteraRequired(true, 1);
        inputMes.style.border = '1px solid var(--vermelho-claro)';
    }
    else{
        alteraRequired(false, 1);
        inputMes.style.border = '';
    }

}

function validaAno(){
    const inputAno = document.querySelector('#ano');
    const data = new Date();
    const dataAtual = data.getFullYear();

    if(inputAno.value > dataAtual){
        alteraRequired(true, 2);
        inputAno.style.border = '1px solid var(--vermelho-claro)';
    }
    else{
        alteraRequired(false, 2);
        inputAno.style.border = '';
    }
}

function ouveInput(){
    const input = document.querySelectorAll('.js-click');
    const activeError = document.querySelectorAll('.required');
    const requiredDateValid = document.querySelector('.required-valid-date')

    function callback(){
        activeError.forEach((elementoIndividual) =>{
            elementoIndividual.classList.remove('active-error');
        });

        input.forEach(element => {
            if(element.nextElementSibling.nextElementSibling.classList.contains('active-error')){
                element.style.border = '1px solid var(--vermelho-claro)'
            }
            else{
                element.style.border = ''
            }
        });

        requiredDateValid.classList.remove('active-error')
    }

    input.forEach((elemento) =>{
        elemento.addEventListener('click', callback);
    });
}

ouveInput();