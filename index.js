// JavaScript Document
console.log("howdy");

const tantoePlayButton = document.querySelector("#row li:nth-of-type(1) .playPauseBTN");

const brazilPlayButton = document.querySelector("#row li:nth-of-type(2) .playPauseBTN");

tantoePlayButton.addEventListener("click", playTantoe);

brazilPlayButton.addEventListener("click", playBrazil);

/* Ik heb de id genaamd song weggehaald, dus nu zijn het normale li's, dus hoe roep ik dat aan?. Ook moet dit afgespeelt kunnen worden op list.html */

function playTantoe(event) {
    const tantoeCard = event.target.closest("li");
    const tantoeAudio = tantoeCard.querySelector("audio");

    // als niet playing
    if (tantoeAudio.paused ) {
        tantoeAudio.play();

        tantoePlayButton.innerHTML = "Pause &#9208;"
    }
    // als wel playing
    else {
        tantoeAudio.pause();
        tantoePlayButton.innerHTML = "Play &#9658;"
    }
}

function playBrazil(event) {
    const brazilCard = event.target.closest("li");
    const brazilAudio = brazilCard.querySelector("audio");

    // als niet playing
    if (brazilAudio.paused ) {
        brazilAudio.play();

        brazilPlayButton.innerHTML = "Pause &#9208;"
    }
    // als wel playing
    else {
        brazilAudio.pause();
        brazilPlayButton.innerHTML = "Play &#9658;"
    }
}