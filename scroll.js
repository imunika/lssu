$(document).ready(function(){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 400) {
				$('.btt').fadeIn();
			} else {
				$('.btt').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('.btt').click(function () {
			$('html, body').animate({scrollTop: 0}, 800);
			return false;
		});
});

// // const backToTopButton = document.querySelector("#btt");

// // window.addEventListener("scroll", scrollFunction);

// // function scrollFunction() {
// // 	if (window.pageYOffset > 300) {
// // 		backToTopButton.style.display = "block";
// // 	}
// // 	else {
// // 		backToTopButton.style.display = "none";
// // 	}
// // }

// // window.addEventListener("click", backToTop);

// // function backToTop() {
// // 	window.scrollTo(0, 0);
// // }