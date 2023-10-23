function handleMouseEnter() {
    // console.log(this);
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

/* outra abordagem de utilização dos eventos de click sem um addEventListener, a desvantagem 
é que será necessário declarar cada onclick no html */
function selectCarouselItem(selectedButtonElement) {
    const selectedItem = selectedButtonElement.id;
    const carousel = document.querySelector('.s-cards-carousel');
    const transform = carousel.style.transform;
    const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
    const rotateYDeg = -120 * (Number(selectedItem) - 1) // 360/3 (3 cards)
    const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}Deg)`);
    carousel.style.transform = newTransform;

    const activeButtonElement = document.querySelector('.s-controller__button--active');
    activeButtonElement.classList.remove('s-controller__button--active');
    selectedButtonElement.classList.add('s-controller__button--active');
}