class Over {
    selectors = {
        root: '[data-js-overflow]',
        button: '[data-js-overflow-button]',
        button1: '[data-js-overflow-button1]',
        slash: '[data-js-overflow-slash]',
        slash1: '[data-js-overflow-slash1]',
        text: '[data-js-overflow-text]',
        text1: '[data-js-overflow-text1]',
    }

    stateClasses = {
        overflowText: 'overflow-text',
        rotateSlash: 'rotate-slash',
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root)
        if(!this.rootElement) return
        this.buttonElement = this.rootElement.querySelector(this.selectors.button)
        this.button1Element = this.rootElement.querySelector(this.selectors.button1)
        this.slashElement = this.rootElement.querySelector(this.selectors.slash)
        this.slash1Element = this.rootElement.querySelector(this.selectors.slash1)
        this.textElement = this.rootElement.querySelector(this.selectors.text)
        this.text1Element = this.rootElement.querySelector(this.selectors.text1)
        this.bindEvents()
    }

    buttonClick = () => {
        this.textElement.classList.toggle(this.stateClasses.overflowText)
        this.slashElement.classList.toggle(this.stateClasses.rotateSlash)
    }

    buttonClick1 = () => {
        this.text1Element.classList.toggle(this.stateClasses.overflowText)
        this.slash1Element.classList.toggle(this.stateClasses.rotateSlash)
    }    

    bindEvents() {
        this.buttonElement.addEventListener('click', this.buttonClick)
        this.button1Element.addEventListener('click', this.buttonClick1)
    }
}

export default Over