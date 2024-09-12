$(document).ready(function () {
	$(".gallery").slick({
		// slidesToShow: 1,
		// slidesToScroll: 1,
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 3000,
		// centerMode: true,
		// centerPadding: '0px',
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: "170px",
				},
                breakpoint: 450,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					centerMode: true,
				},
			},
		],
	});
});
