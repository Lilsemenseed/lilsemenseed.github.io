(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();

    // Initiate the wowjs
    new WOW().init();

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });

    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });

    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: false,
        animateOut: 'fadeOutLeft',
        items: 1,
        dots: true,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            }
        }
    });

// Typing animation
const text = "Let's take a look at the production.";
const textContainer = document.querySelector('.home-title .home-text22');

// Set the initial text color to black
textContainer.style.color = "black";
textContainer.textContent = ''; // Clear any existing content

let animationStarted = false; // Add a flag to track if the animation has started

function typeText() {
    if (animationStarted) {
        return; // If animation has already started, do nothing
    }

    animationStarted = true;

    let index = 0;
    const interval = setInterval(function () {
        if (index === text.length) {
            clearInterval(interval);
        } else {
            const char = text.charAt(index);
            const typedText = textContainer.textContent;
            textContainer.textContent = typedText + char;
            index++;
        }
    }, 50); // Adjust typing speed as needed
}

// Call the typing animation when the page is scrolled
window.addEventListener('scroll', function () {
    const scrollY = window.scrollY || window.pageYOffset;
    const windowHeight = window.innerHeight;

    if (!animationStarted && scrollY > windowHeight * 0.7) {
        typeText();
    }
});



})(jQuery);
