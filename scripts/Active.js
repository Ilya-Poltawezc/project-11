class Active {
    selectors = {
        root: '[data-js-active]',
        imgs: '[data-js-active-img]',
    }

    stateClasses = {
        opacityImg: 'opacity-img',
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root)
        if (!this.rootElement) return
        this.imgsElements = this.rootElement.querySelectorAll(this.selectors.imgs)
        this.bindEvents()
    }

    buttonClick = (event) => {
        const img = event.target.closest(this.selectors.imgs)
        if (!img || !this.rootElement.contains(img)) return
        this.imgsElements.forEach(item => item.classList.remove(this.stateClasses.opacityImg))
        img.classList.toggle(this.stateClasses.opacityImg)
    }

    bindEvents() {
        this.rootElement.addEventListener('click', this.buttonClick)
    }
}

export default Active