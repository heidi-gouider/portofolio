//bouttons animation
const playBtn = document.getElementById('playBtn');
const stopBtn = document.getElementById('stopBtn');
const svg = document.getElementById('look-at-project');
svg.w = svg.getAttribute('width');
svg.h = svg.getAttribute('height');

// Calcul de la distance
const range = (min, max) => max - min;
// Random
const random = (min, max) => Math.random() * (max - min) + min;

// transformations
const transform = (progress, { start, end }) =>
  start + progress * range(start, end);
// timing functions
const tfn = {
  easeOutCubic: t => Math.pow(t - 1, 3) + 1,
  easeInCubic: t => Math.pow(t, 3),
  easeInQuad: t => t * t,
  easeOutQuad: t => t * (2 - t),
  parabolic: t => -4 * Math.pow(t, 2) + 4 * t
};

// je vais utiliser le requestAnimationFrame pour mes animations d'images
//par a suite je crérais des formes avec svg

// animation droplet

//la fonction randomIterval execute un callback répété au bout 
//d'un certain nombre de frames
const animeRain = (function() {
    let rafID = null;
    
    const randomInterval = (callback,min, max) => {
        let NF = Math.round(random(min, max));
        let f = 0;

        const frame = ()=> {
            f += 1;
            if (f >= NF) {
                NF = random(min, max);
                f = 0;
                callback();
            }
            rafID = requestAnimationFrame(frame);
        };
        rafID = requestAnimationFrame(frame);
    };


    const newDrop = () => {
        const drop = document.createElementNS('https://www.w3.org/2000/svg', 'use');
        drop.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#drop');
        // return drop;
    
        const rand = Math.random();
        const easeRand = tfn.easeInQuad(rand);
        const scaleFactor = easeRand * (4 - 1) + 1;

        let blurFactor = 0;
        if (scaleFactor >= 1.5 && scaleFactor < 2){
            blurFactor = 1;
        } else if (scaleFactor >= 2 && scaleFactor < 2.5) {
            blurFactor = 2;
        } else if (scaleFactor >= 2.5) {
            blurFactor = 3;
        }

        drop.setAttribute('x', Math.round(random(0, svg.w/scaleFactor +scaleFactor*50)) );
        drop.setAttribute('y', -22);
        

        if (blurFactor)
            drop.setAttribute('filter', `url(#blur${blurFactor})`);

        return {
            el : drop,
            factor : scaleFactor
        };
    };

    //clonage + animation de la goutte
    const animeDrop = () => {
        let drop = newDrop();
        let f = 0;
        const NF = 500;

        const animeDatas = {
            translateY : { start: 0, end: 700 },
            // rotate : { quand la souris passe dessus}
        };

        const frame = () => {
            f += 1;
            const progress = f/NF;
            const ease = tfn.easeOutCubic(progress);

            drop.el.setAttribute(
                'transform',
                `translate(0 ${transform(ease, animeDatas.translateY)}
                scale(
                    ${drop.factor}
                    )`
            );

            if ( !(f%NF) ) {
                svg.removeChild(drop.el);
                return;
            }

            requestAnimationFrame(frame);
        };

        svg.appendChild(drop.el);
        requestAnimationFrame(frame)
    };

    const play = () => {
        if (rafID) return;
            randomInterval(animeDrop,20, 35);
    };

    const stop = () => {
        cancelAnimationFrame(rafID);
        rafID = null;
    };

    return {
        play: play,
        stop: stop
    };
}());

playBtn.addEventListener('click', () => {
    animeRain.play();
}, false);

stopBtn.addEventListener('click', () => {
    animeRain.stop();
}, false);









// www.youtube-nocookie.com/embed/FDBHLX5HFnO
