$(document).ready(function () {





// init function

function init () {
fetch('https://api.rawg.io/api/platforms?key=5d6305c20a2d4927a017ef5ef6beab60')
    .then(response => response.json())
    .then(data => { console.log(data)
        for (let i = 0; i < data.results.length; i++) {
            $('.dropdown-item').append('<a class="dropdown-anchor" id="' + data.results[i].id + '">' + data.results[i].name + '</a>');
        if (data.results[i].name == 'PC') {
            for (let j = 0; j < data.results[i].games.length; j++) {
            $('#pc-list').append('<li class="pc-list-item">' + data.results[i].games[j].name + '</li>')
            }
        }
         if (data.results[i].name == 'PlayStation 5') {
            for (let j = 0; j < data.results[i].games.length; j++) {
            $('#ps5-list').append('<li class="playstation-list-item">' + data.results[i].games[j].name + '</li>')
            }
        }
         if (data.results[i].name == 'Xbox One') {
            for (let j = 0; j < data.results[i].games.length; j++) {
            $('#xbox-list').append('<li class="xbox-list-item">' + data.results[i].games[j].name + '</li>')
            }
        }
         if (data.results[i].name == 'iOS') {
            for (let j = 0; j < data.results[i].games.length; j++) {
            $('#ios-list').append('<li class="ios-list-item">' + data.results[i].games[j].name + '</li>')
            }
        }
         if (data.results[i].name == 'Android') {
            for (let j = 0; j < data.results[i].games.length; j++) {
            $('#android-list').append('<li class="android-list-item">' + data.results[i].games[j].name + '</li>')
            }
        }
        }
    })
}



function searchGame(e) {
e.preventDefault();
if(!$('#game-search').val()) {
alert('Please enter a game')
return;
}
const game = $('#game-search').val().replaceAll(' ', '-').trim();
localStorage.setItem("game", game);
window.location.href = "game.html"
}


function searchPlatform() {
var platform = $(this).text()
var platformId = $(this).attr('id');
localStorage.setItem("platform-name", platform)
localStorage.setItem("platform", platformId)
window.location.href = "platform.html"
}










//event listeners
$('#searchBtn').on('click', searchGame);
$(document).on('click', '.dropdown-anchor', searchPlatform);





init();
});