$(document).ready(function () {

	// ------ VARIABLES --------
	var platform = localStorage.getItem("platform");
	var platformName = localStorage.getItem("platform-name")

	// ------ PLATFORM FETCH --------
	fetch('https://api.rawg.io/api/platforms/' + platform + '?key=5d6305c20a2d4927a017ef5ef6beab60')
		.then(response => response.json())
		.then(data => {
			$('#platform-image').attr('src', data.image_background);
			$('#platform-title').text(platformName);
			if (platform == 4 || platform == 187 || platform == 1 || platform == 3 || platform == 21) {
				$('#platform-stats-container').append('<img style="margin-left: 2%; margin-top: 1%;" height="20px" width="70px" src="./assets/images/icons/' + platform + '.png">')
			}
			$('#total-games').text(data.games_count);
		})




	// ------- VIDEO FETCH ------
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'c0c3663d07msh3f3a9199795b993p11b56fjsnfed46f4daa0f',
			'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
		}
	};
	fetch('https://youtube138.p.rapidapi.com/search/?q=' + platformName + 'gaming news' + '&hl=en&gl=US', options)
		.then(response => response.json())
		.then(data => {
			console.log(data)
			for (let i = 0; i < data.contents.length; i++) {
				if (data.contents[i].type == 'video') {
					let video = 'https://www.youtube.com/embed/' + data.contents[i].video.videoId;
					$('.video-container').append('<iframe class="video-frame" src="' + video + '"></iframe>')
					return;
				}
			}
		})
		.catch(err => console.error(err));
 });