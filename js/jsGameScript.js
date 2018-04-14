$(function(){
    var typed = new Typed('#whack', {
    strings: ["A simple JavaScript game where in you need to whack moles coming out of their holes, but you need to hurry since you've got only 30s! Beat my highest score of 63. The game is mobile, tablet and PC compatible."],
    typeSpeed: 10,
    backSpeed: 0,
    cursorChar: ''
  });
});

$(document).ready(function() {
    $(window).scroll( function(){
        $('.me').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                var id = $(this).attr('data-con');
                var write = $(this).attr('data-wri');
                var typed = new Typed('#' + id, {
                    strings: [write],
                    typeSpeed: 10,
                    backSpeed: 0,
                    cursorChar: ''
                });
                $(this).removeClass('me');
            }
            
        }); 
    
    });
    
});