/* jQuery Pre loader
 -----------------------------------------------*/
$(window).load(function() {
    $('.preloader').fadeOut(1000); // set duration in brackets    
});


/* Magnific Popup
-----------------------------------------------*/
$(document).ready(function() {
    $('.popup-youtube').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
    });
});


/* Istope Portfolio
-----------------------------------------------*/
jQuery(document).ready(function($) {

    if ($('.iso-box-wrapper').length > 0) {

        var $container = $('.iso-box-wrapper'),
            $imgs = $('.iso-box img');

        $container.imagesLoaded(function() {

            $container.isotope({
                layoutMode: 'fitRows',
                itemSelector: '.iso-box'
            });

            $imgs.load(function() {
                $container.isotope('reLayout');
            })

        });

        //filter items on button click

        $('.filter-wrapper li a').click(function() {

            var $this = $(this),
                filterValue = $this.attr('data-filter');

            $container.isotope({
                filter: filterValue,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false,
                }
            });

            // don't proceed if already selected 

            if ($this.hasClass('selected')) {
                return false;
            }

            var filter_wrapper = $this.closest('.filter-wrapper');
            filter_wrapper.find('.selected').removeClass('selected');
            $this.addClass('selected');

            return false;
        });

    }

});


$(document).ready(function() {

    /* Hide mobile menu after clicking on a link
      -----------------------------------------------*/
    $('.navbar-collapse a').click(function() {
        $(".navbar-collapse").collapse('hide');
    });


    /*  smoothscroll
    ----------------------------------------------*/
    $(document).on('click', 'a[href^="#"]', function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });



    /* home slideshow section
    -----------------------------------------------*/
    $(function() {
        jQuery(document).ready(function() {
            $('#home').backstretch([
                "images/home-bg-slideshow1.jpg",
                "images/home-bg-slideshow2.jpeg",
                "images/home-bg-slideshow3.jpeg",
                "images/home-bg-slideshow4.jpeg",
                "images/home-bg-slideshow5.jpeg",
                "images/home-bg-slideshow6.jpeg",
                "images/home-bg-slideshow7.jpeg",
                "images/home-bg-slideshow8.jpeg",
                "images/home-bg-slideshow9.jpeg",
                "images/home-bg-slideshow10.jpeg",
                "images/home-bg-slideshow11.jpeg",
                "images/home-bg-slideshow12.jpg",
                "images/home-bg-slideshow13.jpg",
            ], {
                duration: 2000,
                fade: 1500
            });
        });
    })


    /* Flexslider
     -----------------------------------------------*/
    $(window).load(function() {
        $('.flexslider').flexslider({
            animation: "slide"
        });
    });


    /* Parallax section
      -----------------------------------------------*/
    function initParallax() {
        $('#about').parallax("100%", 0.1);
        $('#feature').parallax("100%", 0.3);
        $('#about').parallax("100%", 0.1);
        $('#video').parallax("100%", 0.2);
        $('#menu').parallax("100%", 0.3);
        $('#team').parallax("100%", 0.3);
        $('#gallery').parallax("100%", 0.1);
        $('#contact').parallax("100%", 0.2);
    }
    initParallax();


    /* Nivo lightbox
      -----------------------------------------------*/
    $('#gallery .col-md-4 a').nivoLightbox({
        effect: 'fadeScale',
    });

    /* Totop button
       -----------------------------------------------*/
    $(document).ready(function() {
        $("#totop").hide(); //hide your div initially
		$("#totop2").hide();
        var topOfOthDiv = $("#feature").offset().top;
		var topElementHeight = document.getElementById('feature').offsetHeight;
		var middleOfDiv = topOfOthDiv + (topElementHeight/2)
        $(window).scroll(function() {
            if ($(window).scrollTop() > (topOfOthDiv + topElementHeight)) { //scrolled past the other div?
                $("#totop").show(); //reached the desired point -- show div
            }
			else if (($(window).scrollTop()) < (topOfOthDiv + topElementHeight) && $("#totop").is(":visible")) { //scrolled above the other div?
                $("#totop").hide(); //reached the desired point -- hide div
				$("#totop2").show();
				setTimeout(function(){$("#totop2").hide();}, 600);
            }
        });
    });

    /* scrolla
    -------------------------------*/
    $('.animate').scrolla({
        mobile: false,
        once: true
    });

});