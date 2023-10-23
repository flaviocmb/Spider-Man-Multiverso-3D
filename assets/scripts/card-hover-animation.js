function handleMouseEnter() {
    console.log(this);
    this.classList.add('s-card--hovered');
    document.body.id = `${this.id}-hovered`;
}

function handleMouseLeave () {
    this.classList.remove('s-card--hovered');
    document.body.id = '';
}

function AddEventListenersToCards() {
    
    //Exemplo de código #1
    // const cardElements = document.getElementsByClassName('s-card');
    // const cardArray = Array.from(cardElements); // Converte a coleção em um array
    // cardArray.forEach(card => {
    //     card.addEventListener('mouseenter', handleMouseEnter);
    //     card.addEventListener('mouseleave', handleMouseLeave);
    // });

    //Exemplo de código #2
    // const cardElements = document.querySelectorAll('.s-card');
    // cardElements.forEach(card => {
    //     card.addEventListener('mouseenter', handleMouseEnter);
    //     card.addEventListener('mouseleave', handleMouseLeave);
    // });

    //Exemplo de código #3
    const cardElements = document.getElementsByClassName('s-card');
    for (let i = 0; i < cardElements.length; i++) {
        cardElements[i].addEventListener('mouseenter', handleMouseEnter);
        cardElements[i].addEventListener('mouseleave', handleMouseLeave);
        
    }
}

// DOMContentLoaded garante que o conteúdo do DOM vai ser carregado e só depois o JavaScript será executado
document.addEventListener('DOMContentLoaded', AddEventListenersToCards, false);