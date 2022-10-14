jQuery(document).ready(function($) {


	var mastheadheight = $('.ds-header').outerHeight();
	//console.log(mastheadheight);
	$(".ds-banner,.ds-main-section").css("margin-top" , mastheadheight);

	$(window).scroll(function(){
	    if ($(window).scrollTop() >= 10) {
	        $('.ds-header').addClass('ds-fixed-header');
	    }
	    else {
	        $('.ds-header').removeClass('ds-fixed-header');
	    }
	}).scroll();


});


// counter
//#region - start of - number counter animation
const counterAnim = (qSelector, start = 0, end, duration = 1000) => {
	const target = document.querySelector(qSelector);
	let startTimestamp = null;
	const step = (timestamp) => {
	 if (!startTimestamp) startTimestamp = timestamp;
	 const progress = Math.min((timestamp - startTimestamp) / duration, 1);
	 target.innerText = Math.floor(progress * (end - start) + start);
	 if (progress < 1) {
	  window.requestAnimationFrame(step);
	 }
	};
	window.requestAnimationFrame(step);
   };
   //#endregion - end of - number counter animation
   
   document.addEventListener("DOMContentLoaded", () => {
	counterAnim("#counter1", 1000, 60, 1000);
	counterAnim("#counter2", 5000, 100, 1500);
	counterAnim("#counter3", 1000, 150, 2000);
   });