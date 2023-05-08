const carousel = document.getElementById("carousel");
const images = carousel.getElementsByTagName("img");
let index = 0;

function showImage() {
  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove("active");
  }
  images[index].classList.add("active");
  index = (index + 1) % images.length;
}

setInterval(showImage, 5000);


