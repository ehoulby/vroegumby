function initMap() {
        var uluru = {lat: 55.65548200000001, lng: 8.29073900000003};
        var map = new google.maps.Map(document.getElementById('kort'), {
          zoom: 15,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
