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

      window.addEventListener("click", function(event) {
        var btn2 = document.querySelector('#btn2')
        if (event.target == btn2) {
            window.location.href = ('omvroegumsider/skov.html')
          }
      });

      window.addEventListener("click", function(event) {
        var btn3 = document.querySelector('#btn3')
        if (event.target == btn3) {
            window.location.href = ('omvroegumsider/vroegumfiskesoe.html')
          }
      });

      window.addEventListener("click", function(event) {
        var btn4 = document.querySelector('#btn4')
        if (event.target == btn4) {
            window.location.href = ('omvroegumsider/vroegumstation.html')
          }
      });

      window.addEventListener("click", function(event) {
        var btn5 = document.querySelector('#btn5')
        if (event.target == btn5) {
            window.location.href = ('omvroegumsider/dengamleskole.html')
          }
      });




      var imageSlides = document.querySelectorAll('.imageslides');
      var leftArrow = document.querySelector('.arrow-left');
      var rightArrow = document.querySelector('.arrow-right');
      var activeImageSlide = 0;


      function reset() {
        for (var i = 0; i < imageSlides.length; i++) {
          imageSlides[i].style.display = 'none';
        }
      }


      function startSlide() {
        reset();
        imageSlides[0].style.display = "block";

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
      if (leftArrow) {
        leftArrow.addEventListener("click", function(){
          if (activeImageSlide == 0) {
            activeImageSlide = imageSlides.length;
          }
          pressLeftArrow();
        });
      }




      if(rightArrow) {
        rightArrow.addEventListener("click", function(){
          if (activeImageSlide == imageSlides.length - 1) {
            activeImageSlide = -1;
          }
          pressRightArrow();
        });

      }

  startSlide();

/*----------------------------------------------------------------------*/
/*
function showEvent() {


events = JSON.parse(localStorage.getItem('events')) || [];
events.push ({

                title: ["Vrøgum Løbet", "Vin Smagning", "Udendørs Løb"],
                date:  ["12. Maj", "20. Maj", "29. Maj"]
              });

localStorage.setItem('events', JSON.stringify(events));
/*
document.getElementById("nameofpostinput").value = "";
document.getElementById("usertextarea").value = "";
document.getElementById("selectforumcategorydropdown").value = 0;*/

/*        var div = document.createElement("div");
        var div2 = document.createElement("div");
        var div3 = document.createElement("div");

        var h1 = document.createElement("h1");
        h1.innerHTML = events[0].title[0];
        div.appendChild(h1);


        p1 = document.createElement("p");
        p1.innerHTML = events[0].date[0];
        div.appendChild(p1);

                var h2 = document.createElement("h2");
                h2.innerHTML = events[1].title[1];
                div2.appendChild(h2);


                p2 = document.createElement("p");
                p2.innerHTML = events[1].date[1];
                div2.appendChild(p2);


                        var h3 = document.createElement("h3");
                        h3.innerHTML = events[2].title[2];
                          div3.appendChild(h3);


                        p3 = document.createElement("p");
                        p3.innerHTML = events[2].date[2];
                        div3.appendChild(p3);


        document.querySelector('#eventdescription').appendChild(div);
        document.querySelector('#eventdescription').appendChild(div2);
        document.querySelector('#eventdescription').appendChild(div3);
        div.style = "background-color: white; font-weight: 400; margin: 20px 25px ;padding: 10px 25px ; box-shadow: 0px 0px 5px 0px rgba(50, 50, 50, 0.59); "

var date1 = document.querySelector('#12');
var date2 = document.querySelector('#20');
var date3 = document.querySelector('#29');



date1.addEventListener('click', function() {
  if if (event.target == btn3) {
      window.location.href = ('omvroegumsider/vroegumfiskesoe.html')
    }
});


  {
  display: flex;
  flex-direction: column;
  position: fixed;
  display: none;
  z-index: 99999;
  padding-top: 100px;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  max-height: 100%;
  overflow: auto;
  background-color: rgba(0, 75, 131, 0.5);
}

#createnewlessonchild {
  background-color: white;
  margin: 0px auto 100px auto;
  padding: 50px 0px 70px 60px;
  width: 60%;
  -webkit-box-shadow: 0px 3px 16px 0px rgba(50, 50, 50, 0.3);
  -moz-box-shadow: 0px 3px 16px 0px rgba(50, 50, 50, 0.3);
  box-shadow: 0px 3px 16px 0px rgba(50, 50, 50, 0.3);
  animation: slidein 1s;
  transform: translateY(3%);

  }

@keyframes slidein {
  0% {

}
}
*/
