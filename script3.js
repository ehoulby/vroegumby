
      var slideIndex = 0;
      showSlides();

      function showSlides() {
          var i;
          var slides = document.querySelectorAll(".billede");
          for (i = 0; i < slides.length; i++) {
             slides[i].style.display = "none";
          }
          slideIndex++;
          if (slideIndex > slides.length) {slideIndex = 1}
          slides[slideIndex-1].style.display = "block";
          setTimeout(showSlides, 5000);
      }


      window.addEventListener("click", function(event) {
        var readmore = document.querySelector("#readmore");
        var readmorea = document.querySelector("#readmorearticle");
        if (event.target == readmore) {
          readmorea.style.display = 'block';

        }
      });

      window.addEventListener("click", function(event) {
        var arrow = document.querySelector("#scrolldown-arrow");

        if (event.target == arrow) {
          window.location.href = ('index.html#nyhederoverskrift')

        }
      });
