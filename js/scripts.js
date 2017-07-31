//   CODE IN JQUERY //

$(() => {
let url = 'http://api.icndb.com/jokes/random';
let $button = $('#get-joke');
let $paragraph = $('#joke');
$button.click( () => getJoke());
function getJoke() {
	$.ajax({
		method: 'GET',
		url: url,
		success: (res) => $paragraph.text(res.value.joke)
	});
}
getJoke();
});

// CODE IN JS //

// document.addEventListener("DOMContentLoaded", () => {
// 	let url = 'http://api.icndb.com/jokes/random';
// 	let button = document.getElementById('get-joke');
// 	let paragraph = document.getElementById('joke');
// 	button.addEventListener('click', () => getJoke());
// 	function getJoke() {
// 		let xhr = new XMLHttpRequest();
// 		xhr.open('GET', url);
// 		xhr.addEventListener('load', () => {
// 			let response = JSON.parse(xhr.response);
// 			paragraph.innerHTML = response.value.joke;
// 		});
// 		xhr.send();
// 	}
// 	getJoke();
// });