$(document).ready(function () {

var platform = localStorage.getItem("platform");
var platformName = localStorage.getItem("platform-name")


fetch('https://api.rawg.io/api/platforms/' + platform + '?key=5d6305c20a2d4927a017ef5ef6beab60')
    .then(response => response.json())
    .then(data => { console.log(data)
        $('#platform-image').attr('src', data.image_background);
        $('#platform-title').text(platformName);
        

})














});