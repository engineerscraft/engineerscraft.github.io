$(window).scroll(function(){
	var scrollTop = $(window).scrollTop();
    
    if(scrollTop < 6)
        scrollTop = 6;

	$('.herotext1, .herotext2, h4').css({
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
	}

});

$(function() {
	$('.scrollbutton, .aboutmelink, .brand-logo').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
	});
});