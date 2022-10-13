// $(document).ready(function () {



//variables for getting elements



// function searchGame(e) {
// e.preventDefault();
// //get input value
// //fetch api to browse games by catagory
// //change location
    // fetch youtube video
// //append info/video to page
// }






function  fetchTest() {
fetch('https://api.rawg.io/api/platforms?key=5d6305c20a2d4927a017ef5ef6beab60')
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fc02a3c87bmshe9e61389afea8d6p11e23ejsn3996352c92c2',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};

fetch('https://youtube138.p.rapidapi.com/video/streaming-data/?id=VyHV0BRtdxo', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
}
fetchTest();









//event listeners
$('###').on('submit', searchGame);





// })