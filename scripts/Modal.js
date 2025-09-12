class Modal {
    selectors = {
        root: '[data-js-menu]',
        modal1: '[data-js-menu-modal1]',
        modal2: '[data-js-menu-modal2]',
        close1: '[data-js-menu-close1]',
        close2: '[data-js-menu-close2]',
        button1: '[data-js-menu-button1]',
        button2: '[data-js-menu-button2]',
    }

    stateClasses = {
        closeMenu: 'close-menu',
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root)
        if(!this.rootElement) return
        this.modal1Element = this.rootElement.querySelector(this.selectors.modal1)
        this.modal2Element = this.rootElement.querySelector(this.selectors.modal2)
        this.close1Element = this.rootElement.querySelector(this.selectors.close1)
        this.close2Element = this.rootElement.querySelector(this.selectors.close2)
        this.button1Element = this.rootElement.querySelector(this.selectors.button1)
        this.button2Element = this.rootElement.querySelector(this.selectors.button2)
        this.bindEvents()
    }

    onButtonClick = () => {
        this.modal1Element.classList.remove(this.stateClasses.closeMenu)
    }

    twoButtonClick = () => {
        this.modal2Element.classList.remove(this.stateClasses.closeMenu)
    }

    closeButton = () => {
        this.modal1Element.classList.add(this.stateClasses.closeMenu)
        this.modal2Element.classList.add(this.stateClasses.closeMenu)
    }

    bindEvents() {
        this.button1Element.addEventListener('click', this.onButtonClick)
        this.button2Element.addEventListener('click', this.twoButtonClick)
        this.close1Element.addEventListener('click', this.closeButton)
        this.close2Element.addEventListener('click', this.closeButton)
    }
}

export default Modal