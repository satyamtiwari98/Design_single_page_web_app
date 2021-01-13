$(function () {


    let width = 720;
    let animationSpeed = 1000;
    let pause = 2000;
    let currentSlide = 1;


    let $slider = $('#slider');
    let $slideContainer = $('.slides', $slider);
    let $slides = $('.slide', $slider);

    let interval;

    function startSlider() {

        interval = setInterval(function () {

            $slideContainer.animate({ 'margin-left': '-=' + width }, animationSpeed, function () {

                if (++currentSlide === $slides.length) {

                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);

                }

            });

        }, pause);

    }


    function pauseSlider() {

        clearInterval(interval);

    }


    $slideContainer
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider);

    startSlider();


});






