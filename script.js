// JavaScript Document
console.log("howdy");

/*
new Sortable(example2Left, {
    group: 'shared', // set both lists to same group
    animation: 150
});

new Sortable(example2Right, {
    group: 'shared',
    animation: 150
});
*/





/* Hoe moet ik de code hierboven vertalen naar de mijne? */

var options2 = {
    group: 'shared';
    animation: 1000;
}

var options3 = {
    group: 'shared';
    animation: 1000;
}

var songlist = document.getElementById('row');
var dragPlace = document.getElementById('drag');

var sortable2 = Sortable.create(songlist, dragPlace, options2, options3);