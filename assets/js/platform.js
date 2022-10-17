$(document).ready(function () {

var platform = localStorage.getItem("platform");
var platformName = localStorage.getItem("platform-name")


fetch('https://api.rawg.io/api/platforms/' + platform + '?key=5d6305c20a2d4927a017ef5ef6beab60')
    .then(response => response.json())
    .then(data => { console.log(data)
        $('#platform-image').attr('src', data.image_background);
        $('#platform-title').text(platformName);
        $('#total-games').text(data.games_count);

})





const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fc02a3c87bmshe9e61389afea8d6p11e23ejsn3996352c92c2',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};

fetch('https://youtube138.p.rapidapi.com/search/?q=' + platformName + 'gaming news' + '&hl=en&gl=US', options)
	.then(response => response.json())
	.then(data => { console.log(data)
        const video = 'https://www.youtube.com/embed/' + data.contents[0].video.videoId;
        $('.video-container').append('<iframe class="video-frame" src="' + video + '"></iframe>')
})
	.catch(err => console.error(err));








});