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
    const rotateYDeg = -120 * (Number(selectedItem) - 1); //SelectedItem equivale ao número do id (1, 2 ou 3), subtraído de -1 e depois múltiplicado por 120 (acrescenta-se 120 graus).
    const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}Deg)`); //ele rotaciona (x)deg a partir do ponto em que está
    carousel.style.transform = newTransform;

    const cards = {
        spider1: "spider-man-01",
        spider2: "spider-man-02",
        spider3: "spider-man-03",
    }

    console.log(selectedButtonElement);

    if (selectedItem === "1") {
        console.log(cards.spider1);
    } else if (selectedItem === "2") {
        console.log(cards.spider2);
    } else {
        console.log(cards.spider3);
    }

    /* To-Do: aplicar o hover (.s-controller__button:hover) somente no elemento ativo,
    fazer isso baseado no botão, pois a rotação não tem posicionamento deg fixo. */

    const activeButtonElement = document.querySelector('.s-controller__button--active');
    activeButtonElement.classList.remove('s-controller__button--active');
    selectedButtonElement.classList.add('s-controller__button--active');

}