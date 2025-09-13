const mario = document.getElementById('mario');
const pipe = document.getElementById('pipe');

// Faz o Mario pular
function jump() {
    if (!mario.classList.contains('jump')) {
        mario.classList.add('jump');

        setTimeout(() => {
            mario.classList.remove('jump');
        }, 500);
    }
}

// Detecta colisão
const checkCollision = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioBottom = parseInt(window.getComputedStyle(mario).bottom);

    if (pipePosition <= 120 && pipePosition > 0 && marioBottom < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.src = 'https://i.imgur.com/OUkLi.gif'; // Mario game over
        mario.style.width = '80px';

        clearInterval(checkCollision);
        alert('Game Over!');
    }
}, 10);

// Tecla para pular
document.addEventListener('keydown', jump);
