function mudaCor(){
    const hover = document.querySelectorAll('.bg-numbers');

    function mudaBG(){
        hover.forEach(numero => {
            numero.style.backgroundColor = 'var(--azul-escuro)';
            numero.style.color = 'var(--cinza-claro)';
        });
        
        this.style.backgroundColor = 'var(--laranja)';
        this.style.color = 'var(--branco)';
    }

    hover.forEach( (numero) => {
        numero.addEventListener('click', mudaBG);
    });
}

mudaCor();

function pegaNota(){
    const texto = document.querySelector('#bg-para');
    const hover = document.querySelectorAll('.bg-numbers');
    let nota = 0;

    // function darNota(index){
    //     nota = index + 1;
    //     texto.innerText = `You selected ${nota} out of 5`;
    // }

    // hover.forEach((numero, index) => {
    //     numero.addEventListener('click', ()=>{
    //         darNota(index);
    //     })
    // })
}

pegaNota();