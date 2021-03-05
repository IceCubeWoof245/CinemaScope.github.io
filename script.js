//JavaScript for CinemaScope



//nav bar code
// when something with onclick="openNav()" is clicked it will show the thing with id "nav"
function openNav() {
	document.getElementById("nav").style.display = "block";
}

// when something with onclick="closeNav()" is clicked it will hide the thing with id "nav"	
function closeNav() {
	document.getElementById("nav").style.display = "none";
}




//script for opening and closing the movie descriptions
//there's probably a simpler way of doing this but it's midnight and i want sleep
function openBox1() {document.getElementById("moviedesc1").style.display = "block";}
function closeBox1() {document.getElementById("moviedesc1").style.display = "none";}

function openBox2() {document.getElementById("moviedesc2").style.display = "block";}
function closeBox2() {document.getElementById("moviedesc2").style.display = "none";}

function openBox3() {document.getElementById("moviedesc3").style.display = "block";}
function closeBox3() {document.getElementById("moviedesc3").style.display = "none";}

function openBox4() {document.getElementById("moviedesc4").style.display = "block";}
function closeBox4() {document.getElementById("moviedesc4").style.display = "none";}

function openBox5() {document.getElementById("moviedesc5").style.display = "block";}
function closeBox5() {document.getElementById("moviedesc5").style.display = "none";}

function openBox6() {document.getElementById("moviedesc6").style.display = "block";}
function closeBox6() {document.getElementById("moviedesc6").style.display = "none";}

function openBox7() {document.getElementById("moviedesc7").style.display = "block";}
function closeBox7() {document.getElementById("moviedesc7").style.display = "none";}

function openBox8() {document.getElementById("moviedesc8").style.display = "block";}
function closeBox8() {document.getElementById("moviedesc8").style.display = "none";}










//the slideshow code
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
	showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("slides");
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
}
