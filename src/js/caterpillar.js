$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();

    if (scrollTop < 6)
        scrollTop = 6;

    if (scrollTop > 40) {
        $('.navbar').css({
            'background': '#fff'
        });
		$('.navbar-logo').css({
			'font-size': '3rem!important'
		})
		$('.navbar-logo img').css({
			'height': '3.8rem'
		})		
		$('.navbar-caption').css({
			'display': 'inherit'
		});
	}
    if (scrollTop <= 40) {
		$('.navbar').css({
			'background': 'transparent'
		});
		$('.navbar-caption').removeClass('text-secondary');
		$('.navbar-caption').css({
			'display': 'none'
		});
		$('.navbar-logo img').css({
			'height': '12rem'
		})		
    }
});

$( document ).ready(function() {
window.sr = ScrollReveal({ reset: true });

// Customizing a reveal set
sr.reveal('.card', { duration: 2000 });});