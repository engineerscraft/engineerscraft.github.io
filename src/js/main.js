$(window).scroll(function(){
	var scrollTop = $(window).scrollTop();
    
    if(scrollTop < 6)
        scrollTop = 6;

	$('.herotext1, .herotext2, h4, .square1, .square2').css({
		'opacity': 1 - scrollTop / 200 ,
		'margin-top' : scrollTop/ 2 + 'px'
	});
		
	if(scrollTop > 40) {
		$('.navbar-fixed').css({
		    'background': '#fff'
		});

		$('.brand-logo, .aboutmelink').css({
			'color': '#e67e22'
		});
		
		var svg = $('.social').find('svg path');
		svg.attr('fill', '#e67e22');
	}
	
	if(scrollTop <= 40) {
		$('.navbar-fixed').css({
		    'background': 'transparent'
		});

		$('.brand-logo, .aboutmelink').css({
			'color': '#fff'		
		});
		
		var svg = $('.social').find('svg path');
		svg.attr('fill', '#fff');
	}
});

$(function() {
	$('.scrollbutton, .aboutmelink, .brand-logo').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
	});	
	
    $('.splitter1').addClass("splitter1-animation"); 
    $('.splitter2').addClass("splitter2-animation"); 
});

$('.square1, .square2').hover(function () {
		$('.homepage').find('.heroimage').addClass('heroimage-animation');
		$('.square1 .square-header').css({ 'color': '#616161' });
		$('.square2 .square-header').css({ 'color': '#616161' });
		$('.square1 .square-desc').css({ 'color': '#616161' });
		$('.square2 .square-desc').css({ 'color': '#616161' });
	},
	function () {
		$('.homepage').find('.heroimage').removeClass('heroimage-animation');
		$('.square1 .square-header').css({ 'color': '#fff' });
		$('.square2 .square-header').css({ 'color': '#fff' });
		$('.square1 .square-desc').css({ 'color': 'transparent' });
		$('.square2 .square-desc').css({ 'color': 'transparent' });
    });

$('.square1').hover(function () {
		$('.square1 .square-header').css({ 'color': '#616161' });
		$('.square1 .square-desc').css({ 'color': '#616161', 'animation': 'slide-up' });

	},
	function () {
		$('.square1 .square-header').css({ 'color': '#fff' });
		$('.square1 .square-desc').css({ 'color': 'transparent' });
    });

$('.square2').hover(function () {
		$('.square2 .square-header').css({ 'color': '#616161' });
		$('.square2 .square-desc').css({ 'color': '#616161', 'animation': 'slide-up' });
	},
	function () {
		$('.square2 .square-header').css({ 'color': '#fff' });
		$('.square2 .square-desc').css({ 'color': 'transparent' });
    });
