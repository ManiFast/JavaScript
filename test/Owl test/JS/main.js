$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
		items: 4,
		loop: true,
		nav: true,
		dots: true,
		autoplay: true,
		autoplayTimeout: 3000,
		responsive:{
			0:{
					items:1
			},
			600:{
					items:3
			},
			1200:{
					items:4
			}
		}
	});
});