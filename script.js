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

      window.addEventListener("click", function(event) {
          var box1 = document.querySelector('.box1');
          if (event.target == box1) {
            window.location.href = ('bil.html')

          }
      });
