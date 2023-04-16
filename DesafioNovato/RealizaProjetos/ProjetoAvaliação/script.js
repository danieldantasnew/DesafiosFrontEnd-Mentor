var recebeNota;

function mudaCor(){
    const hover = document.querySelectorAll('.bg-numbers');
    function mudaBG(){
        hover.forEach((numero) =>{
            numero.classList.remove('ativo');
        })
        this.classList.add('ativo');

        let converteNota = parseInt(this.textContent);
        recebeNota = converteNota;
    }

    hover.forEach((numero) => {
        numero.addEventListener('click', mudaBG);
    });

    
}

mudaCor();
