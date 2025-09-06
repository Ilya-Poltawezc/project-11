class HeaderDrop {
    selectors = {
        root: '[data-js-drop]',
        list: '[data-js-drop-list]',
        button: '[data-js-drop-button]',
    }

    stateClasses = {
        menuDrop: 'menu-drop',
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root)
        this.listElement = this.rootElement.querySelector(this.selectors.list)
        this.buttonElement = this.rootElement.querySelector(this.selectors.button)
        this.bindEvents()
    }

    buttonClick = () => {
        this.listElement.classList.toggle(this.stateClasses.menuDrop)
    }

    bindEvents() {
        this.buttonElement.addEventListener('click', this.buttonClick)
    }
}

export default HeaderDrop