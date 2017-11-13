function Facts() {                 
	alert ("Bonus Facts about Antigua and Barbuda! Antigua is 108 square miles and Barbuda is 62 square miles. Our Prime Minister is the Honourable Gaston Browne and our Governor General is the Honourable Sir Rodney Williams. There are 6 parishes: St. John's, St. George's, St. Peter's, St. Philip's, St. Paul's,and St. Mary's");                                                                                                                                                                                                            

}

function description(){
var msg= document.getElementById("flagBtn").value;
alert ("click for more facts!!");


}

function initMap() {
    var location1 = {lat: 17.120214, lng:-61.84523};
    var location2 = {lat: 17.125631,  lng: -61.820503};
    var location3 = {lat: 17.121229, lng: -61.841054};
    var location4 = {lat: 17.023955, lng: -61.775081};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: location1
    });
    var marker1 = new google.maps.Marker({
      position: location1,
      map: map
    });
    var marker2 = new google.maps.Marker({
      position: location2,
      map: map
    });
    var marker3 = new google.maps.Marker({
      position: location3,
      map: map
    });
    var marker4 = new google.maps.Marker({
      position: location4,
      map: map
    });
  }

