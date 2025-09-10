class Modal {
    selectors = {
        root: '[data-js-menu]',
        modal: '[data-js-menu-modal]',
        close: '[data-js-menu-close]',
        button: '[data-js-menu-button]',
    }

    stateClasses = {
        closeMenu: 'close-menu',
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root)
        if(!this.rootElement) return
        this.modalElement = this.rootElement.querySelector(this.selectors.modal)
        this.closeElement = this.rootElement.querySelector(this.selectors.close)
        this.buttonElement = this.rootElement.querySelector(this.selectors.button)
        this.bindEvents()
    }

    onButtonClick = () => {
        this.modalElement.classList.remove(this.stateClasses.closeMenu)
    }

    closeButton = () => {
        this.modalElement.classList.add(this.stateClasses.closeMenu)
    }

    bindEvents() {
        this.buttonElement.addEventListener('click', this.onButtonClick)
        this.closeElement.addEventListener('click', this.closeButton)
    }
}

export default Modal