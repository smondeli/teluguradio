function aud_play_pause(radioName) { 
	var currRadio = document.getElementById(radioName);
	var currRaddioButton = document.getElementById(radioName+"Button");
	var currRadios = document.getElementsByTagName('audio');
	var allRaddioButtons = document.getElementsByTagName('input');
	 
	if (currRadio.paused) { 
		for(i=0; i<currRadios.length; i++){
			currRadios[i].pause();
			allRaddioButtons[i].value = "Play";
			allRaddioButtons[i].src = "play.png";
		}	
		currRadio.play();
		currRaddioButton.value = "Pause";
		currRaddioButton.src = "pause.png";
	} else { 
		currRadio.pause();
		currRaddioButton.value = "Play";
		currRaddioButton.src = "play.png";
	} 
}
