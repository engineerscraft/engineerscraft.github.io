$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();

    if (scrollTop < 6)
        scrollTop = 6;

    $('.herotext1, .herotext2, h4, .square1, .square2').css({
        'opacity': 1 - scrollTop / 200,
    });

    if (scrollTop > 40) {
        $('.navbar-fixed').css({
            'background': '#fff',
            'border-bottom': '#e67e22 solid 2px'
        });

        $('.brand-logo, .aboutmelink').css({
            'color': '#e67e22'
        });

        var svg = $('.social').find('svg path');
        svg.attr('fill', '#e67e22');
    }

    if (scrollTop <= 40) {
        $('.navbar-fixed').css({
            'background': 'transparent',
            'border-bottom': 'transparent solid 2px'
        });

        $('.brand-logo, .aboutmelink').css({
            'color': '#fff'
        });

        var svg = $('.social').find('svg path');
        svg.attr('fill', '#fff');
    }
});

$(function() {
    if (screen.width > 900) {
        $(".vertical-line").fadeOut(1000, function() {
            $(".navbar-fixed, .homepage, section").fadeIn(1000);
            $('.scrollbutton, .aboutmelink, .brand-logo, .square1, .square2').on('click', function(e) {
                e.preventDefault();
                $('html, body').animate({
                    scrollTop: $($(this).attr('href')).offset().top
                }, 500, 'linear');
            });
            $('.hide').removeClass('hide');
            $('.splitter1, .splitter2, .square1, .square2').css({
                'transition': 'all 0.5s ease-in'
            });
            $('.splitter1').addClass("splitter1-animation");
            $('.splitter2').addClass("splitter2-animation");
            $('.splitter1').css({
                'border-right': '#aeaeae solid 1px'
            });
            $('.herotext1').addClass('herotext-animation');

        });
    } else {
        $('.herotext1').addClass('herotext-animation');
        $('.scrollbutton, .aboutmelink, .brand-logo, .square1, .square2').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top
            }, 500, 'linear');
        });
    }
});

if (screen.width > 900) {

    $('.square1, .square2').hover(function() {
            $('.homepage').find('.heroimage').removeClass('heroimage-animation2');
            $('.homepage').find('.heroimage').addClass('heroimage-animation1');
        },
        function() {
            $('.homepage').find('.heroimage').addClass('heroimage-animation2');
            $('.homepage').find('.heroimage').removeClass('heroimage-animation1');
        });

    $('.square1').hover(function() {
            $('.square1 .square-header').css({
                'color': '#616161'
            });
            $('.square1 .square-desc').css({
                'color': '#616161',
                'animation': 'slide-up',
                'border-color': '#e67e22'
            });

        },
        function() {
            $('.square1 .square-header').css({
                'color': '#fff'
            });
            $('.square1 .square-desc').css({
                'color': 'transparent',
                'border-color': 'transparent'
            });
        });

    $('.square2').hover(function() {
            $('.square2 .square-header').css({
                'color': '#616161'
            });
            $('.square2 .square-desc').css({
                'color': '#616161',
                'animation': 'slide-up',
                'border-color': '#e67e22'
            });
        },
        function() {
            $('.square2 .square-header').css({
                'color': '#fff'
            });
            $('.square2 .square-desc').css({
                'color': 'transparent',
                'border-color': 'transparent'
            });
        });
}