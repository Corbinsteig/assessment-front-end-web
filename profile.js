let faveColor = document.querySelector('button#color')
let favePlace = document.querySelector('button#place')
let faveRitual = document.querySelector('button#ritual')


function giveColor(event) {
    event.preventDefault();

    alert('Red')
}

function givePlace(event) {
    event.preventDefault();

    alert('My Home')
}

function giveRitual(event) {
    event.preventDefault();

    alert('Going to the gym after a long day')
}

faveColor.addEventListener('click', giveColor);
favePlace.addEventListener('click', givePlace);
faveRitual.addEventListener('click', giveRitual);
