class Video {
    selectors = {
        root: '[data-js-player]',
        video: '[data-js-player-video]',
        button: '[data-js-player-button]',
    }

    stateClasses = {
        playButton: 'play-button',
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root)
        if(!this.rootElement) return
        this.videoElement = this.rootElement.querySelector(this.selectors.video)
        this.buttonElement = this.rootElement.querySelector(this.selectors.button)
        this.bindEvents()
    }

    buttonClick = () => {
        this.videoElement.play()
        this.videoElement.controls = true
        
        if (this.videoElement.controls === true) {
            this.buttonElement.classList.add(this.stateClasses.playButton)
        }
    }

    pauseVideo = () => {
        this.videoElement.controls = false
        this.buttonElement.classList.remove(this.stateClasses.playButton)
    }

    bindEvents() {
        this.buttonElement.addEventListener('click', this.buttonClick)
        this.videoElement.addEventListener('pause', this.pauseVideo)
    }
}

export default Video