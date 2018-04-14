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
$(document).ready(function(){
	$('input').focus(function(){
		$(this).parents('.group').addClass('focused');
	});
	$('input').blur(function(){
		var inputValue = $(this).val();
		if ( inputValue == "" ) {
			$(this).removeClass('filled');
			$(this).parents('.group').removeClass('focused');  
		} else {
			$(this).addClass('filled');
		}
	});
	$('textarea').focus(function(){
		$(this).parents('.group').addClass('focused');
		console.log("Here");
	});
	$('textarea').blur(function(){
		var inputValue = $(this).val();
		if ( inputValue == "" ) {
			$(this).removeClass('filled');
			$(this).parents('.group').removeClass('focused');  
		} else {
			$(this).addClass('filled');
		}
	});
});