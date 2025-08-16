class Button {
    selectors = {
        root: '[data-js-slider]',
        buttons: '[data-js-slider-button]',
    }

    stateClasses = {
        isActive: 'is-active',
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root)
        this.buttonsElemetns = this.rootElement.querySelectorAll(this.selectors.buttons)
        this.bindEvents()
    }

    buttonClick = (event) => {
        const button = event.target.closest(this.selectors.buttons)

        // если кликнул не по кнопке, то просто возвращаю
        if (!button || !this.rootElement.contains(button)) return

        // убираю актиную у всех кнопок
        this.buttonsElemetns.forEach(item => item.classList.remove(this.stateClasses.isActive))

        // ставлю активную на кликнутую 
        button.classList.toggle(this.stateClasses.isActive)
    }

    bindEvents() {
        this.rootElement.addEventListener('click', this.buttonClick)
    }
}

export default Button