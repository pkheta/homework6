var video;

function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() { 
		video.play();

	console.log("Play Video");
	console.log(video)
	volume = document.querySelector("#volume")
	console.log(volume);
	volume.innerHTML = video.volume;
} 

function pauseVid() { 
		video.pause();

	console.log("Pause Video");
} 

function decreaseSpeed() { 

	video.playbackRate = video.playbackRate*0.8;

  	console.log("Speed is "+ video.playbackRate);
} 

function increaseSpeed() {

	video.playbackRate = video.playbackRate*1.25;

	console.log("Speed is "+ video.playbackRate);
} 

function skipAhead() {
	if(video.currentTime <=596){
		video.currentTime = 60 + video.currentTime

	playVid();
	}

	else{

		
		video.playbackRate=1; 
		video.currentTime=0;
				playVid();
	}

	console.log("Current location is "+ video.currentTime);
} 

function mute() { 
	console.log(video.muted)
	var button = document.querySelector("#mute");
	if (video.muted ==true){
		video.muted=false;
		console.log("Changing to Unmuted");
		button.innerHTML = "Unmuted"
	} 
	else {
		video.muted = true;
		console.log("Changing to Muted");
		button.innerHTML = "Muted"
	}

  	
}

function changeVolume() {
	let slider = document.querySelector("#volumeSlider")
	console.log(slider.value)
	video.volume = slider.value/100;
 console.log("Volume is " + video.volume);
 volume.innerHTML = (video.volume * 100) + "%";

}
       

function gray() { 
document.querySelector("#myVideo").style.filter = "grayscale(100%)";


	console.log("In grayscale");
}

function color() {
document.querySelector("#myVideo").style.filter = "grayscale(0%)"

	console.log("In color") 
}
