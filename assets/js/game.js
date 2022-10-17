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
            $('#game-image-container').remove();
            $('#game-stats-container').remove();
            $('#main-container').removeClass('columns').addClass('is-flex is-flex-direction-column is-align-items-center').append('<h2 class="sorry-header">Sorry! That game was not found.</h2>');
            $('#main-container').append('<button id="go-back">Go Back</button>')
            $('#video-container').remove();
            $('main').addClass('set-height')
        }
        console.log('data', data)
        $('#game-title').text(data.name);
        $('#game-image').attr('src', data.background_image);
        $('#released').text(data.released);
        $('#description').text(data.description_raw);
        for (let i = 0; i < data.platforms.length; i++) {
            $('#platforms').append('<li class="platforms-list-item">' + data.platforms[i].platform.name + '</li>')
        }
    })


  
	.catch(err => { console.log('error', err)
    
});

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fc02a3c87bmshe9e61389afea8d6p11e23ejsn3996352c92c2',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};

fetch('https://youtube138.p.rapidapi.com/search/?q=' + game + 'game trailer' + '&hl=en&gl=US', options)
	.then(response => response.json())
	.then(data => { console.log(data)
        const video = 'https://www.youtube.com/embed/' + data.contents[0].video.videoId;
        $('.video-container').append('<iframe class="video-frame" src="' + video + '"></iframe>')
})
	.catch(err => console.error(err));






$(document).on('click', '#go-back', function () {
window.location.href = "index.html"
})









})