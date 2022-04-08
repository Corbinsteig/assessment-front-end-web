console.log("hello world");

let picture = document.querySelector('img#image');

function giveCompliment(event) {
	event.preventDefault();

	alert('You are good looking')
}

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form has been submitted');
}




let form = document.querySelector('form#contact');

picture.addEventListener('mouseover', giveCompliment);
form.addEventListener('submit', handleSubmit);