$(document).ready(function(){
	if(! $("#skillsCanvas").tagcanvas({
		textColour: '#888888',
		outlineThickness: 0.5,
		maxSpeed: 0.03,
		depth: 0.3,
		wheelZoom: false,
		pinchZoom: false,
		noSelect: true
	})){
		console.log("Tag Cloud not initialised");
	}
});