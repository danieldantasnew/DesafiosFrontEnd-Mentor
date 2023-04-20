function botaoClicado(){
    const botaoSubmit = document.querySelector('#botao-submit');
    const inputDia = document.querySelector('#dia');
    const inputMes = document.querySelector('#mes');
    const inputAno = document.querySelector('#ano');
    const data = new Date();
    const textoIdade = document.querySelectorAll('.idade');
    console.log(data.getFullYear())
    
    function pegaEntrada(){
        let valorDia = inputDia.value;
        let valorMes = inputMes.value;
        let valorAno = data.getFullYear() - (inputAno.value);

        textoIdade[0].innerHTML = `${valorAno}`
        textoIdade[1].innerHTML = `${valorMes}` 
        textoIdade[2].innerHTML = `${valorDia}` 
    };

    botaoSubmit.addEventListener('click', pegaEntrada);
}

botaoClicado();