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
          var img1 = document.querySelector('#bil')
          var p1 = document.querySelector('#bilp')
          if (event.target == box1 || event.target == img1 || event.target == p1) {
            window.location.href = ('transportsider/bil.html')

          }
      });

      window.addEventListener("click", function(event) {
          var box2 = document.querySelector('.box2');
          var img2 = document.querySelector('#taxa')
          var p2 = document.querySelector('#taxap')
          if (event.target == box2 || event.target == img2 || event.target == p2) {
            window.location.href = ('transportsider/taxa.html')

          }
      });


      window.addEventListener("click", function(event) {
          var box3 = document.querySelector('.box3');
          var img3 = document.querySelector('#tog')
          var p3 = document.querySelector('#togp')
          if (event.target == box3 || event.target == img3 || event.target == p3) {
            window.location.href = ('transportsider/tog.html')

          }
      });


      window.addEventListener("click", function(event) {
          var box4 = document.querySelector('.box4');
          var img4 = document.querySelector('#cykel')
          var p4 = document.querySelector('#cykelp')
          if (event.target == box4 || event.target == img4 || event.target == p4) {
            window.location.href = ('transportsider/cykel.html')
          }
      });

      window.addEventListener("click", function(event) {
          var box5 = document.querySelector('.box5');
          var img5 = document.querySelector('#parkeringspladser')
          var p5 = document.querySelector('#parkeringspladsp')
          if (event.target == box5 || event.target == img5 || event.target == p5) {
            window.location.href = ('transportsider/parkeringspladser.html')

          }
      });

      window.addEventListener("click", function(event) {
        var box6 = document.querySelector('.box6');
        var img6 = document.querySelector('#camping')
        var p6 = document.querySelector('#campingp')
        if (event.target == box6 || event.target == img6 || event.target == p6){
            window.location.href = ('transportsider/camping.html')
          }
      });

      window.addEventListener("click", function(event) {
        var btn1 = document.querySelector('#btn1')
        if (event.target == btn1) {
            window.location.href = ('omvroegumsider/ballonpark.html')
          }
      });


      var imageSlides = document.querySelectorAll('.imageslides');
      var leftArrow = document.querySelector('.arrow-left');
      var rightArrow = document.querySelector('.arrow-right');
      var activeImageSlide = 0;

      reset();

      function reset() {
        for (var i = 0; i < imageSlides.length; i++) {
          imageSlides[i].style.display = 'none';
        }

        activeImageSlide++;
        if (activeImageSlide > imageSlides.length) {
            activeImageSlide = 1
        }

        imageSlides[activeImageSlide-1].style.display = "block";
        setTimeout(reset, 5000); // Change image every 2 seconds

      }



      function pressLeftArrow() {
        reset();
        imageSlides[activeImageSlide - 1].style.display = 'block';
        activeImageSlide --;

      }

      function pressRightArrow() {
        reset();
        imageSlides[activeImageSlide + 1].style.display = 'block';
        activeImageSlide ++;

      }

        leftArrow.addEventListener("click", function(){
          if (activeImageSlide == 0) {
            activeImageSlide = imageSlides.length;
          }
          pressLeftArrow();
        });

        rightArrow.addEventListener("click", function(){
          if (activeImageSlide == imageSlides.length - 1) {
            activeImageSlide = -1;
          }
          pressRightArrow();
        });
