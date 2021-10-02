/*
Responsiveness for Wow animation
*/
function changeAnimation() {
	var width = $(window).width();
	if(width < 768) {
		$(".wow").removeClass("fadeInUp fadeInLeft fadeInRight fadeIn fadeInUp").addClass("fadeInUp");
	}
}
// Call function on page load
changeAnimation();
// Call WOW.js
new WOW().init();


/*
Animation for Navbar color and size
*/
$(window).on("scroll load", function() {
	if ($(document).scrollTop() > 0) {
		$('nav').addClass('shrinkNav');
	} else {
		$('nav').removeClass('shrinkNav');
	}
});

function autoScroll(sectionClass) {
	$('html, body').animate({
		scrollTop: $("." + sectionClass).offset().top
	}, 750);
}


/*
Loader animation
*/
function showLoader()
{
    $(".loader").fadeIn("slow");
}
function hideLoader()
{
    $(".loader").fadeOut("slow");
}


var viv = new Vivus('vivus-name', {
	type: 'delayed',
	duration: 150,
	file: '../img/Abhinav Punase.svg',
	pathTimingFunction: Vivus.EASE
}, mycallback);

function mycallback() {
	viv.stop()
}

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Learning Something New", "a puzzle", "Projects "];
const typingDelay = 100;
const erasingDelay = 75;
const newTextDelay = 2000; 
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  }
  else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  }
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { 
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});



hideLoader();


