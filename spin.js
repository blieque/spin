// variables
var spinAllowed = true,
    rotation = 0,
    redBelow = false,
    modRotationTimeout = null,
    elemDot = document.getElementById('dot'),
    elemSpin = document.getElementById('spin'),
    elemRed = document.getElementById('red');

// functions/events
function dotClick() {

    if (!spinAllowed) {
        // woot for good flow
        return;
    }

    clearTimeout(modRotationTimeout)
    spinAllowed = false;
    halfTurn()

    setTimeout(function(){
        spinAllowed = true;
    }, 600);

    modRotationTimeout = setTimeout(modRotation, 3600);

}

function modRotation() {

    rotation %= 360;

    elemSpin.className = 'nt';
    setTimeout(setRotation, 20);
    setTimeout(function(){
        elemSpin.className = '';
    }, 40);

}

function halfTurn() {

    redBelow = !redBelow;
    rotation -= 180;
    setRotation(rotation)

    elemRedClass = redBelow ? 'inverted' : '';
    elemRed.className = elemRedClass;

}

function setRotation()  {

    elemSpin.style.transform = 'rotate(' + rotation + 'deg)';

}

elemDot.addEventListener('click', dotClick)
