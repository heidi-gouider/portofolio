// le stop animation n'est pas defini !!!

const canvas = document.getElementById('canvas');

const drop = document.querySelector('#drop');
drop.style.position = "absolute";


const playBtn = document.querySelector('#playBtn');
playBtn.addEventListener('click', rain, false);
// je crée une animation en déplaçant l'image de la goutte du haut vers le bas
let yPos = 0;
let xPos = 0;

function rain() {
    yPos += 2;
    drop.style.top = `${yPos}px`;

    if (yPos >= 500) {
        yPos = 50;
    }

    requestAnimationFrame(rain);
    //  else {
    //      drop.style.display = 'none';

    // }
}

const stopBtn = document.querySelector('#stopBtn');
stopBtn.addEventListener('click', stopAnimation, false);

// class animation {
//     constructor (start-animation, stop_animation, parent_element){
            // this.start_animation = start_animation;
            // this.stop_animation = start_animation;
            // this.parent_animation = parent_animation;

//     }
// }

// const animation = new Animation(
//     start_animation = playBtn,
//     stop_animation = stopBtn,
//     parent_animation = document.querySelector
// );
