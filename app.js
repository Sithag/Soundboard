var text = document.getElementById("text"); 

window.addEventListener("keydown", function(e) {
		
		console.log(e.keyCode);

		
//Et on coupe le son
		if (e.keyCode == 32 ) {
				var sounds = document.getElementsByTagName('audio');
 				for(i=0; i<sounds.length; i++) sounds[i].pause();

 				text.innerHTML = ("Appuyez sur une touche de votre clavier (espace pour reset les sons)");	
 			};

 		const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

		
		
		console.log(audio.volume);

		text.innerHTML = audio.innerHTML;

		console.log(text)



		if(!audio) return;

		audio.currentTime = 0;

		const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
				
		key.classList.add("playing");

		audio.play();

		const keys = document.querySelectorAll(".key");
		
		keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
		
		console.log(audio.duration)
		console.log(audio.currentTime)

		
		

//Réglage du volume
		var slider = document.getElementById("myRange");
		var output = document.getElementById("lvl");
		slider.oninput = function() {
  		audio.volume = this.value/100;
  		output.innerHTML = "Sound level : " + this.value + '%';
}
	});

		
		

function removeTransition(e) {
		
		if(e.propertyName !== "transform") return;

		e.currentTarget.classList.remove("playing");

};

