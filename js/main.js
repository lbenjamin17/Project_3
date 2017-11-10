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
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}