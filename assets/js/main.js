class portfolio {
    constructor() {
        this.createAnimation()
        this.createNavigation()

        // 	//Evenements
        // this.onWindowResize ()
        // window.addEventListener('resize', this.onWindowResize.bind(this))
        // this.root.addEventListener('keyup', e => {
        // 	if (e.key === 'ArrowPlay' || e.key === 'Play') {
        // 		this.play()
        // 	} else if (e.key === 'ArrowStop' || e.key === 'Stop') {
        // 		this.stop()
        // 	}
        // })
    }

    createAnimation() {
        let drops = document.querySelector('drop')
        let rain = this.createDivWithClass('drops')

        drops.onclick = function () {
            let dropSrc = drops.getAttribute('src');
        }
    }

    createNavigation() {
        let playBtn = this.createDivWithClass('animation_play')
        let stopBtn = this.createDivWithClass('animation_stop')
    }
}