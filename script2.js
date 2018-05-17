var imageSlides2 = document.querySelectorAll('.imageslides2');
var leftArrow2 = document.querySelector('.arrow-left2');
var rightArrow2 = document.querySelector('.arrow-right2');
var activeImageSlide2 = 0;


function reset2() {
  for (var i = 0; i < imageSlides2.length; i++) {
    imageSlides2[i].style.display = 'none';
  }
}


function startSlide2() {
  reset2();
  imageSlides2[0].style.display = "block";

}

function pressLeftArrow2() {
  reset2();
  imageSlides2[activeImageSlide2 - 1].style.display = 'block';
  activeImageSlide2 --;

}

function pressRightArrow2() {
  reset2();
  imageSlides2[activeImageSlide2 + 1].style.display = 'block';
  activeImageSlide2 ++;

}
  if(leftArrow2) {
    leftArrow2.addEventListener("click", function(){
      if (activeImageSlide2 == 0) {
        activeImageSlide2 = imageSlides2.length;
      }
      pressLeftArrow2();
    });
  }

  if(rightArrow2) {
    rightArrow2.addEventListener("click", function(){
      if (activeImageSlide2 == imageSlides2.length - 1) {
        activeImageSlide2 = -1;
      }
      pressRightArrow2();
    });
  }

  startSlide2();
