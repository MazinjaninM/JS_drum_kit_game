let crashRide = document.querySelector('#crash-ride');
let hiHatTop = document.querySelector('#hihat-top');

const animateCrashOrRide = () => {
    crashRide.style.transform = 'rotate(0deg) scale(1.5)';
}
const animateHiHatClosed = () => {
    hiHatTop.style.top = '171px';
}

window.addEventListener("keydown", (event) => {
let code = event.key;
let keyElement = document.querySelector(`div[data-key=${code}]`);

if (!keyElement) return;

let audio = document.querySelector(`audio[data-key=${code}]`);
audio.currentTime = 0;
audio.play();

switch(code) {
    case 'e':
    case 'r':
        animateCrashOrRide();
        break;
    case 'k':
    case 'i':
        animateHiHatClosed();
        break;
}
    keyElement.classList.add('playing');
});

const removeCrashRideTransition = e => {
    if(e.propertyName !== 'transform') return;

    e.target.style.transform = 'rotate(-7.2deg) scal(1.5)';
}

const removeHiHatTopTransition = e => {
    if(e.propertyName !== 'top') return;
    e.target.style.top = '166px';
}

const removeKeyTransition = e => {
    if(e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

let drumKays = document.querySelectorAll('.key');

drumKays.forEach(key => {
    key.addEventListener("transitionend", removeKeyTransition)
});

crashRide.addEventListener("transitionend", removeCrashRideTransition);
hiHatTop.addEventListener("transitionend", removeHiHatTopTransition);