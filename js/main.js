function Facts() {                 
	alert ("Bonus Facts about Antigua and Barbuda! Antigua is 108 square miles and Barbuda is 62 square miles. Our Prime Minister is the Honourable Gaston Browne and our Governor General is the Honourable Sir Rodney Williams. There are 6 parishes: St. John's, St. George's, St. Peter's, St. Philip's, St. Paul's,and St. Mary's");                                                                                                                                                                                                            

}

function description(){
var msg= document.getElementById("flagBtn").value;
alert ("click for more facts!!");


}

   /*function initMap() {
        var uluru = {lat: 17.087635, lng: -61.772346};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });


      }

      function async defer src(){  =("https://maps.googleapis.com/maps/api/js?key=AIzaSyBwH4uAOXcFNal5_2aJiITiEwwRmAFjJfw&callback=initMap");  
      */

var slideIndex = 0;
var controls = document.querySelectorAll('.controls');
for(var i=0; i<controls.length; i++){
	controls[i].style.display = 'inline-block';
}

var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

function nextSlide(){
	goToSlide(currentSlide+1);
}

function previousSlide(){
	goToSlide(currentSlide-1);
}

function goToSlide(n){
	slides[currentSlide].className = 'slide';
	currentSlide = (n+slides.length)%slides.length;
	slides[currentSlide].className = 'slide showing';
}


var playing = true;
var pauseButton = document.getElementById('pause');

function pauseSlideshow(){
	pauseButton.innerHTML = '&#9658;'; // play character
	playing = false;
	clearInterval(slideInterval);
}

function playSlideshow(){
	pauseButton.innerHTML = '&#10074;&#10074;'; // pause character
	playing = true;
	slideInterval = setInterval(nextSlide,2000);
}

pauseButton.onclick = function(){
	if(playing){ pauseSlideshow(); }
	else{ playSlideshow(); }
};

var next = document.getElementById('next');
var previous = document.getElementById('previous');

next.onclick = function(){
	pauseSlideshow();
	nextSlide();
};
previous.onclick = function(){
	pauseSlideshow();
	previousSlide();
};
