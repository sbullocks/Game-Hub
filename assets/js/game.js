$(document).ready(function () {

    // ------ VARIABLES --------
    var game = localStorage.getItem("game");

    // ----- GAME FETCH -------
    fetch('https://api.rawg.io/api/games/' + game + '?key=5d6305c20a2d4927a017ef5ef6beab60')
        .then(response => response.json())
        .then(data => {
            if (data.redirect == true) {
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
            $('#game-title').text(data.name);
            $('#game-image').attr('src', data.background_image);
            $('#released').text(data.released);
            $('#description').text(data.description_raw);
            for (let i = 0; i < data.platforms.length; i++) {
                $('#platforms').append('<li class="platforms-list-item">' + data.platforms[i].platform.name + '</li>')
            }
        })
        .catch(err => {
            console.log('error', err)

        });

    // ------- VIDEO FETCH --------
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4668dbe26bmsh6748a98435d60aep1fc66ajsnc91da4934957',
            'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
        }
    };
    fetch('https://youtube138.p.rapidapi.com/search/?q=' + game + 'game trailer' + '&hl=en&gl=US', options)
        .then(response => response.json())
        .then(data => {
            const video = 'https://www.youtube.com/embed/' + data.contents[0].video.videoId;
            $('.video-container').append('<iframe class="video-frame" src="' + video + '"></iframe>')
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

    fetch('https://amazon24.p.rapidapi.com/api/product?keyword=' + game.replace('-', ' ') + 'video game' + '&country=US&page=1', amazonOptions)
        .then(response => response.json())
        .then(data => {
            $('#amazon-clickable').attr('href', data.docs[0].product_detail_url).attr('target', '_blank');
        })
        .catch(err => console.error(err));


    // ------- EVENT LISTENERS -------
    $(document).on('click', '#go-back', function () {
        window.location.href = "index.html"
    })

});
