

$('nav a, h4').hover(function () {
    $(this).addClass('hover');
},
function(){
    $(this).removeClass('hover')
})

$('.river img').hover(function () {
    $(this).addClass('imagehover');
},
function(){
    $(this).removeClass('imagehover')
})

//Fixed Nav Bar

	var navOffSet = $("nav").offset().top;
	console.log('nav offset is running');

$(window).on('scroll',function (){
	var distanceScrolled = $(window).scrollTop();

	console.log('The distance scrolled is: ' + distanceScrolled);

	if ($(window).scrollTop() > navOffSet) {
		$('nav').addClass('no-scroll');
	}
	else {
		$('nav').removeClass('no-scroll');
	}
});