$(document).ready(function () {

//get local storage
var game = localStorage.getItem("game");
// $('#header').text(game.replaceAll('-', ' ').trim());


fetch('https://api.rawg.io/api/games/' + game + '?key=5d6305c20a2d4927a017ef5ef6beab60')
	.then(response => response.json())
	.then(data => {
        if(data.redirect == true) {
            var newName = data.slug;
            localStorage.setItem("game", newName);
            location.reload();
        } else if (data.detail == 'Not found.') {
            alert("sorry that game wasnt found")
        }
        console.log('data', data)
        $('#header').text(data.name);
        $('#game-image').attr('src', data.background_image);
    })


  
	.catch(err => { console.log('error', err)
    
});


















})