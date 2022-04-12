// JavaScript Document
console.log("howdy");

/**************/
/* PLAY/PAUSE */
/**************/
const tantoePlayButton = document.querySelector("#list li:nth-of-type(1) .playPauseBTN");
const brazilPlayButton = document.querySelector("#list li:nth-of-type(2) .playPauseBTN");

function playTantoe(event) {
    console.log(event.target);
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
    console.log(event.target);
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

tantoePlayButton.addEventListener("click", playTantoe);
brazilPlayButton.addEventListener("click", playBrazil);





/***************/
/* DRAG & DROP */
/***************/
var options = {
    animation: 1000
}

var deLijst = document.getElementById('list');
var sortable = Sortable.create(deLijst, options);