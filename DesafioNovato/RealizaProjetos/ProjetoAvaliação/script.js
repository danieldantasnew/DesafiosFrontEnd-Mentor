var recebeNota;

function mudaCor(){
    const hover = document.querySelectorAll('.bg-numbers');
    function mudaBG(){
        if(this.classList.contains('ativo')){
            this.classList.remove('ativo');
            recebeNota = 0; //Se nota é igual a 0 então não deixar clicar no submit.
        }
        else{
            hover.forEach((numero) =>{
                numero.classList.remove('ativo');
            });

            this.classList.add('ativo');

            let converteNota = parseInt(this.textContent);
            recebeNota = converteNota;
        }

    }

    hover.forEach((numero) => {
        numero.addEventListener('click', mudaBG);
    });
}

mudaCor();

/*RESTA APENAS FAZER UM BACKEND QUE RECEBA O VALOR DA VARIÁVEL RECEBENOTA E ARMANEZAR NUM BANCO DE DADOS OU SIMPLESMENTE PASSAR O VALOR PARA A OUTRA PÁGINA E MOSTRAR. DÁ PARA FAZER ISSO COM PHP.*/