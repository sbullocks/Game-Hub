$(document).ready(function () {

    // ----- INIT FUNCTION/INITIAL FETCH'S/APPENDS --------

    function init() {
        fetch('https://api.rawg.io/api/platforms?key=5d6305c20a2d4927a017ef5ef6beab60')
            .then(response => response.json())
            .then(data => {
                for (let i = 0; i < data.results.length; i++) {
                    $('.dropdown-item').append('<a class="dropdown-anchor" id="' + data.results[i].id + '">' + data.results[i].name + '</a>');
                    if (data.results[i].name == 'PC') {
                        for (let j = 0; j < data.results[i].games.length; j++) {
                            $('#pc-list').append('<li class="pc-list-item pf-list-item"><a class="clickable-game">' + data.results[i].games[j].name + '</a></li>')
                        }
                    }
                    if (data.results[i].name == 'PlayStation 5') {
                        for (let j = 0; j < data.results[i].games.length; j++) {
                            $('#ps5-list').append('<li class="playstation-list-item pf-list-item"><a class="clickable-game">' + data.results[i].games[j].name + '</a></li>')
                        }
                    }
                    if (data.results[i].name == 'Xbox One') {
                        for (let j = 0; j < data.results[i].games.length; j++) {
                            $('#xbox-list').append('<li class="xbox-list-item pf-list-item"><a class="clickable-game">' + data.results[i].games[j].name + '</a></li>')
                        }
                    }
                    if (data.results[i].name == 'iOS') {
                        for (let j = 0; j < data.results[i].games.length; j++) {
                            $('#ios-list').append('<li class="ios-list-item pf-list-item"><a class="clickable-game">' + data.results[i].games[j].name + '</a></li>')
                        }
                    }
                    if (data.results[i].name == 'Android') {
                        for (let j = 0; j < data.results[i].games.length; j++) {
                            $('#android-list').append('<li class="android-list-item pf-list-item"><a class="clickable-game">' + data.results[i].games[j].name + '</a></li>')
                        }
                    }
                }
            })
    }


    // ----- EVENT FUNCTIONS -------
    function searchGame(e) {
        e.preventDefault();
        if (!$('#game-search').val()) {
            alert('Please enter a game')
            return;
        }
        const game = $('#game-search').val().replaceAll(' ', '-').replaceAll(':', '').toLowerCase().trim();
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

    function searchClickedGame() {
        const game = $(this).attr('id').toLowerCase();
        localStorage.setItem("game", game);
        window.location.href = "game.html"
    }

    function anotherSearchedClickedGame() {
        const game = $(this).text().replaceAll(' ', '-').replaceAll(':', '').replaceAll('(', '').replaceAll(')', '').toLowerCase().trim();
        localStorage.setItem("game", game);
        window.location.href = "game.html"
    }

    function anotherPlatformClicked() {
        const platform = $(this).text()
        const platformId = $(this).attr('id');
        localStorage.setItem("platform-name", platform);
        localStorage.setItem("platform", platformId);
        window.location.href = "platform.html";
    }
    
    function captureInput (e) {
    localStorage.setItem('searchInput', e.target.value)
    fetch('https://api.rawg.io/api/games' + `?search=${e.target.value}&key=5d6305c20a2d4927a017ef5ef6beab60`)
    .then(response => response.json())
    .then(data => {
    console.log(data)
    const x = data.results.map(result => result.slug)
    console.log(x)
    x.forEach(option => {
        const element = "<option value=\"" + option + "\">" +option + "</option>";
        console.log(option)
        $('#games').append(element)
        console.log(element)
    });
    }).catch(err => {console.log('error', err)})
  console.log(e)
  }

  // ------ EVENT LISTENERS ----------
    $('#searchBtn').on('click', searchGame);
    $(document).on('click', '.dropdown-anchor', searchPlatform);
    $('.carousel-games').on('click', searchClickedGame)
    $(document).on('click', '.clickable-game', anotherSearchedClickedGame)
    $('.platform-click').click(anotherPlatformClicked);
    $('#game-search').on('input', captureInput);
    
    // ----- SPLIDE/CAROUSEL FUNCTION --------
    new Splide('.splide', {
        type: 'loop',
        autoplay: 'play',
        perPage: 3,
        breakpoints: {
            518: {
                perPage: 1,
            }
        }
    }).mount()


  // ------- INIT FUNCTION CALL --------
    init();
});