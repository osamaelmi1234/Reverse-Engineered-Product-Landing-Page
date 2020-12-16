const slider = document.querySelector('.slider');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
const dotsParents = document.querySelector('.controls ul');
var sectionIndex = 0;
document.querySelectorAll('.controls li').forEach(function myFunction(dots, ind) {
  dots.addEventListener('click', function() {
    sectionIndex = ind;
 document.querySelector('.controls .selected').classList.remove('selected');
    dots.classList.add('selected');
    slider.style.transform = 'translate(' + (sectionIndex) * -25  + '%)';
  });
  
});
rightArrow.addEventListener("click", function () {
  if (sectionIndex < 3) {
  sectionIndex = sectionIndex + 1;
    document.querySelector('.controls .selected').classList.remove('selected')
    dotsParents.children[sectionIndex].classList.add('selected');
 
    slider.style.transform = 'translate(' + (sectionIndex) * -25  + '%)';
} 
});

leftArrow.addEventListener("click", function () {
  if (sectionIndex > 0) {
  sectionIndex = sectionIndex - 1;
     document.querySelector('.controls .selected').classList.remove('selected')
    dotsParents.children[sectionIndex].classList.add('selected');
 
   slider.style.transform = 'translate(' + (sectionIndex) * -25  + '%)';
}
});

const sliderTwo = document.querySelector('.slider-two');
const leftA = document.querySelector('.left-new');
const rightA = document.querySelector('.right-new');
var sectionIndexTwo = 0
rightA.addEventListener('click' , function () {
  if (sectionIndexTwo == 0) {
    sectionIndexTwo += 1;
 sliderTwo.style.transform = 'translate(-50%)';
  } else if (sectionIndexTwo == 1)
                                  {
    sectionIndexTwo -= 1;
    sliderTwo.style.transform = 'translate(-0%)';
  }
  });
leftA.addEventListener('click' , function () {
  if (sectionIndexTwo == 1) {
     sectionIndexTwo -= 1;
    sliderTwo.style.transform = 'translate(-0%)';
  }
})