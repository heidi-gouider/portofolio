class Drop {
    constructor(dropElement) {
        this.drop = dropElement;
        this.yPos = 0;
        this.isMoving = false;
        this.movingInterval = null;

        this.playBtn = document.getElementById('playBtn');
        this.stopBtn = document.getElementById('stopBtn');

        this.playBtn.addEventListener('click', () => this.startRain(), false);
        this.stopBtn.addEventListener('click', () => this.stopRain(), false);
    }

    startRain() {
        if (!this.isMoving) {
            this.isMoving = true;
            this.movingInterval = setInterval(() => this.move(), 16); // Appel à la méthode animate toutes les 16 ms (environ 60 FPS)
        }
    }

    stopRain() {
        this.isMoving = false;
        clearInterval(this.movingInterval);
    }

    move() {
        if (this.isMoving) {
            this.yPos += 2;
            this.drop.style.top = `${this.yPos}px`;

            if (this.yPos >= 500) {
                this.yPos = 50;
            }
        }
    }

    explode() {

    }
}

// Créez une instance de l'objet WaterDrop en passant l'élément HTML correspondant (la goutte d'eau)
const drop = new Drop(document.getElementById('drop'));