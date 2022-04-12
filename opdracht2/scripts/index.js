// JavaScript Document
console.log("howdy");

/**************/
/* PLAY/PAUSE */
/**************/
const tantoePlayButton = document.querySelector(".row li:nth-of-type(1) .playPauseBTN");
const brazilPlayButton = document.querySelector(".row li:nth-of-type(2) .playPauseBTN");

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





/****************/
/* SHARED LISTS */
/****************/


/* de lijst met liedjes die je kunt kiezen */
var songlist = document.querySelector('.row');
/* de lijst met liedjes die je gekozen hebt */
var playlist = document.getElementById('playlist');



/* m.b.v. de sortable library kun je liedjes tussen de 2 lijsten slepen */
/* options voor het slepen */
var optionsDiscoverAndPlayList = {
    group: 'shared',
    animation: 1000
}
/* het slepen aanzetten */
var songlistSortable = Sortable.create(songlist, optionsDiscoverAndPlayList);
var playlistSortable = Sortable.create(playlist, optionsDiscoverAndPlayList);

/* liedjes m.b.v. favo buttons aan de playlist toevoegen */
/* nb terug gaat niet omdat daar nog geen button voor is */

/* alle favoButton in de nummers opzoeken */
/* daarom querySelectorAll */
/* var favoButtons is een array */
var favoButtons = document.querySelectorAll('.favoBTN');

// met een loop alle favoButtons in de array naar clicks laten luisteren 
// als er geklikt wordt, dan wordt de functie addToPlaylist uitgevoerd
// zoek je zelf op hoe forEach werkt ?!
favoButtons.forEach(favoButton => {
    favoButton.addEventListener("click",addToPlaylist);
});

function addToPlaylist() {
    // this is de button waarop geklikt is
    // dievoor het gemak opslaan in een var
    var deButtonWaaropGekliktIs = this;

    // het nummer dat bij de button hoort opzoekem
    // zoek je zelf op hoe closest werkt ?!
    var hetNummerDatBijDeButtonHoort = deButtonWaaropGekliktIs.closest("li");

    // het nummer verplaatsen naar de playlist
    // zoek je zelf op hoe prepend werkt ?!
    playlist.prepend(hetNummerDatBijDeButtonHoort);
}





/********/
/* TAGS */
/********/
var filterAll = document.querySelector('#all');
var filterNederlands = document.querySelector('#nederlands');
var filterDance = document.querySelector('#dance');

function filterList(event) {
    let songlist = document.querySelector(".row");
    let nieuweFilter = event.target.value;

    songlist.dataset.filter = nieuweFilter;
}

filterAll.addEventListener("change", filterList);
filterNederlands.addEventListener("change", filterList);
filterDance.addEventListener("change", filterList);