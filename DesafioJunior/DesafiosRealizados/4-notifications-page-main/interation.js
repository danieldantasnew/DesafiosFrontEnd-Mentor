function SelectorAll(seletor){
    this.element = function(){
        return document.querySelectorAll(seletor)
    }

    this.active = function(classe){
        this.element().forEach((item) =>{
            item.classList.add(classe);
        });
    }
}

function SelectorAllRemove(seletor){
    this.element = function(){
        return document.querySelectorAll(seletor)
    }

    this.active = function(classe){
        this.element().forEach((item) =>{
            item.classList.remove(classe);
        });
    }
}

function markAsRead(){
    const markRemove = new SelectorAllRemove('.point-notification-unread');
    const cardsRemove = new SelectorAllRemove('.card-js');
    
    const buttonMark = document.querySelector('.mark-read-js');

    function callback(){
        cardsRemove.active('active');
        markRemove.active('active');
        counter();
    };

    buttonMark.addEventListener('click', callback);

}

function counter(){
    const numberCounter = document.querySelector('#note-js');
    const cards = new SelectorAll('.card-js');

    let contador = 0;
    cards.element().forEach((card) =>{
        if(card.classList.contains('active')){
            contador++;
        }
    });

    numberCounter.innerHTML = `${contador}`
}

function readCard(){
    const cards = new SelectorAll('.card-js');

    function read(element){
        element.currentTarget.classList.remove('active')
        counter();
    }

    cards.element().forEach((card)=>{
        card.addEventListener('click', read)
    });
}

markAsRead();
counter();
readCard();
