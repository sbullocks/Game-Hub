$(document).ready(function () {

var genres = ['Action', 'Indie', 'Adventure', 'RPG', 'Strategy', 'Shooter', 'Casual', 'Simulation', 'Puzzle', 'Arcade', 'Platformer', 'Racing', 'Massively Multiplayer', 'Sports', 'Fighting', 'Family', 'Board Games', 'Educational', 'Card']



//variables for getting elements



function searchGame(e) {
e.preventDefault();
console.log('hi')
if(!$('#game-search').val()) {
alert('Please enter a game')
return;
}
const game = $('#game-search').val().replaceAll(' ', '-').trim();
localStorage.setItem("game", game);
window.location.href = "game.html"
}


function searchGenre() {
var genre = $(this).text();
localStorage.setItem("genre", genre)
window.location.href = "genre.html"
}










//event listeners
$('#searchBtn').on('click', searchGame);
$('.genre-click').on('click', searchGenre);





});