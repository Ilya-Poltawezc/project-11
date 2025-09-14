class Slider {
    selectors = {
        root: '[data-js-slider]',
        button: '[data-js-slider-button]',
    }

    stateClasses = {
        activeButton: 'active-button',
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root)
        if(!this.rootElement) return
        this.buttonElements = this.rootElement.querySelectorAll(this.selectors.button)
        this.bindEvents()
    }

    onButtonClick = (event) => {
        const button = event.target.closest(this.selectors.button)
        if (!button || !this.rootElement.contains(button)) return
        this.buttonElements.forEach(item => item.classList.remove(this.stateClasses.activeButton))
        button.classList.add(this.stateClasses.activeButton)
    }

    bindEvents() {
        this.rootElement.addEventListener('click', this.onButtonClick)
    }
}

export default Slider