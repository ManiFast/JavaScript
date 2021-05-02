$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		//items: 3,
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
					items:2
			},
			1200:{
					items:3
			}
		}
	});
	
	$('[data-fancybox="gallery"]').fancybox({
		selector : '.imglist a:visible'
	});
});