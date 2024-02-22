const slideshowElements = document.querySelectorAll(".slideshow-element");


let currentElements = 1;
setInterval(() => {
  currentElements++;
  const currentElement = document.querySelector(".current");
  currentElement.classList.remove('current');

  if (currentElements> slideshowElements.length) {
    slideshowElements[0].classList.add('current');
    currentElements = 1;
  } else{
    currentElement.nextElementSibling.classList.add('current');
  } 
}, 2000);