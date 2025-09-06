class Hover {
    selectors = {
        root: '[data-js-hover]',
        cards: '[data-js-hover-card]',
        buttons: '[data-js-hover-button]',
    }

    stateClasses  = {
        buttonHidden: 'button-hover',
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root)
        if(!this.rootElement) return
        this.cardsElements = this.rootElement.querySelectorAll(this.selectors.cards)
        this.buttonsElements = this.rootElement.querySelectorAll(this.selectors.buttons) // сделал массив
        this.bindEvents()
    }

    cardHover = (event) => {
        const card = event.target.closest(this.selectors.cards)

        // если навожу не по карту, то просто возвращаю и обработчик не работает
        if (!card || !this.rootElement.contains(card)) return
         
        // ищу кнопки в картах, если кнопка, то добавляю класс и показываю ее
        const button = card.querySelector(this.selectors.buttons)
        if (button) button.classList.add(this.stateClasses.buttonHidden)
    }

    cardOver = () => {
        // скрываю кнопку обратно, когда увожу курсор с карточки
        this.buttonsElements.forEach(btn => btn.classList.remove(this.stateClasses.buttonHidden))
    }

    bindEvents() {
        this.rootElement.addEventListener('mouseover', this.cardHover)
        this.rootElement.addEventListener('mouseout', this.cardOver)
    }
}

export default Hover