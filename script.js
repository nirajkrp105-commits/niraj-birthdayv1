// Confetti banane ka function
function createConfetti() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confetti.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.body.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, 5000);
}
setInterval(createConfetti, 200);

// Balloons banane ka function
function createBalloon() {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    balloon.style.left = Math.random() * 100 + 'vw';
    balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
    balloon.style.animationDuration = (Math.random() * 3 + 4) + 's';
    document.getElementById('balloon-container').appendChild(balloon);

    setTimeout(() => {
        balloon.remove();
    }, 7000);
}
setInterval(createBalloon, 500);

// Naya JavaScript: Click karne par "h2" par effect
const messageElement = document.querySelector('h2');
messageElement.addEventListener('click', () => {
    // Jab click ho toh ek chhota sa effect
    messageElement.style.transform = 'scale(1.1)';
    setTimeout(() => {
        messageElement.style.transform = 'scale(1)';
    }, 200);

    // Kuch aur confetti daalein
    for(let i = 0; i < 20; i++) {
        createConfetti();
    }
});