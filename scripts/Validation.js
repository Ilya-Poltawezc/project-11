class Validation {
    selectors = {
        root: '[data-js-form]',
        label: '[data-js-form-label]',
        input: '[data-js-form-input]',
    }

    stateClasses = {
        requared: 'requared',
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root)
        if(!this.rootElement) return
        this.labelElement = this.rootElement.querySelector(this.selectors.label)
        this.inputElement - this.rootElement.querySelector(this.selectors.input)
        this.bindEvents()
    }

    requaredForm = (event) => {
        event.preventDefault()

        if (this.inputElement.value.trim() === '') {
            this.labelElement.classList.add(this.stateClasses.requared)
        } else {
            this.labelElement.classList.remove(this.stateClasses.requared)
        }
    }

    bindEvents() {
        this.rootElement.addEventListener('submit', this.requaredForm)
    }
}

export default Validation
