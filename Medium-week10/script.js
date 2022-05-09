let myImage = document.querySelector('.img');

myImage.onclick = function(){
	let mySrc = myImage.getAttribute('src');
	if(mySrc == 'car.png'){
		myImage.setAttribute('src', 'eye.png');
	} else {
		myImage.setAttribute('src', 'planes.png');
	}
}
