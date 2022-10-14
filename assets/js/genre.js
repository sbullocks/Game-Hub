$(document).ready(function () {

var genre = localStorage.getItem("genre");


fetch('https://api.rawg.io/api/genres/' + genre + '?key=5d6305c20a2d4927a017ef5ef6beab60')
    .then(response => response.json())
    .then(data => { console.log(data)
        $('#header').text(data.name);
        $('#genre-image').attr('src', data.image_background);

})














});