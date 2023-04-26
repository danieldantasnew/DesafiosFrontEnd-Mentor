function botaoClicado(){
    const botaoSubmit = document.querySelector('#botao-submit');
    const inputDia = document.querySelector('#dia');
    const inputMes = document.querySelector('#mes');
    const inputAno = document.querySelector('#ano');
    const dataAtual = new Date();
    const textoIdade = document.querySelectorAll('.idade');
    
    function pegaEntrada(evento){
        evento.preventDefault(); //evita que a página seja recarregada após o envio do formulário
        let valorDia = inputDia.value;
        let valorMes = inputMes.value;
        let valorAno = inputAno.value;

        const data = moment(`${valorAno}-${valorMes}-${valorDia}`, 'YYYY-MM-DD', true);

        if(data.isValid()){
            //verificar também se a data digitada é maior que a atual (do dia testado)
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
            calculaIdade(valorAno, valorMes, valorDia);
        }
        else{
            console.log('não é válida');
        }

    };

    botaoSubmit.addEventListener('click', pegaEntrada);
}

botaoClicado();