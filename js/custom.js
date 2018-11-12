$(document).ready(function () {
        if (!$("#skillsCanvas").tagcanvas({
                textColour: '#888888',
                outlineThickness: 0.5,
                maxSpeed: 0.03,
                depth: 0.3,
                wheelZoom: false,
                pinchZoom: false,
                noSelect: true
        })) {
                console.log("Tag Cloud not initialised");
        }
});

/* Check the location of each element */
$('.content').each(function (i) {

        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).height();
        console.log(bottom_of_object);
        console.log(bottom_of_window);

        if (bottom_of_object > bottom_of_window) {
                $(this).addClass('hidden');
        }
});


$(window).scroll(function () {
        /* Check the location of each element hidden */
        $('.hidden').each(function (i) {

                var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();

                /* If the object is completely visible in the window, fadeIn it */
                if (bottom_of_window > bottom_of_object) {
                        $(this).animate({ 'opacity': '1' }, 1700);
                }
        });
});