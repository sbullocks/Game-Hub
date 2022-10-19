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
				$('#platform-stats-container').append('<img style="margin-left: 10%; margin-top: 1%;" height="20px" width="60px" src="./assets/images/icons/' + platform + '.png">')
			}
			$('#total-games').text(data.games_count);
		})




	// ------- VIDEO FETCH ------
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '4668dbe26bmsh6748a98435d60aep1fc66ajsnc91da4934957',
			'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
		}
	};
	fetch('https://youtube138.p.rapidapi.com/search/?q=' + platformName + 'gaming news' + '&hl=en&gl=US', options)
		.then(response => response.json())
		.then(data => {
			for (let i = 0; i < data.contents.length; i++) {
				if (data.contents[i].type == 'video') {
					let video = 'https://www.youtube.com/embed/' + data.contents[i].video.videoId;
					$('.video-container').append('<iframe class="video-frame" src="' + video + '"></iframe>')
					return;
				}
			}
		})
		.catch(err => console.error(err));
 
		// ------ AMAZON FETCH -------

    const amazonOptions = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '68ff5d1dcemsh158c287cee1cf83p170410jsn5a71155c310f',
            'X-RapidAPI-Host': 'amazon24.p.rapidapi.com'
        }
    };

    fetch('https://amazon24.p.rapidapi.com/api/product?keyword=' + platformName.replace('-', ' ') + 'gaming system' + '&country=US&page=1', amazonOptions)
        .then(response => response.json())
        .then(data => {
            $('#amazon-clickable').attr('href', data.docs[0].product_detail_url).attr('target', '_blank');
        })
        .catch(err => console.error(err));

});