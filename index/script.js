var arrayOfShuffleImages = [
  {
    imagesrc: "../assets/10283.png",
    set: "10283",
    name: "NASA Space Shuttle Discovery"
  },
  {
    imagesrc: "../assets/10266.png",
    set: "10266",
    name: "NASA Apollo 11 Lunar Lander"
  },
  {
    imagesrc: "../assets/92176.png",
    set: "92176",
    name: "NASA Apollo Saturn V"
  }
];
var currentImage = 0;

function toggleMenu() {
  document.getElementById("navigation-links").classList.toggle("noshow");
}

function shuffleImages(sub) {
  let header_front = document.getElementsByClassName('front')[0];
  let header_back = document.getElementsByClassName('back')[0];
  if (sub) {
    if (currentImage === 2) {
      currentImage = 0;
    } else {
      ++currentImage;
    }
  }
  else {
    if (currentImage === 0) {
      currentImage = 2;
    } else {
      --currentImage;
    }
  }
  document.getElementsByClassName("back")[0].childNodes[0].src = arrayOfShuffleImages[currentImage].imagesrc;
  document.querySelector(".text > h1").innerHTML = arrayOfShuffleImages[currentImage].set;
  document.querySelector(".text > h2").innerHTML = arrayOfShuffleImages[currentImage].name;
  header_front.classList.toggle("front");
  header_front.classList.toggle("back");
  header_back.classList.toggle("front");
  header_back.classList.toggle("back");
}

var id = setInterval(shuffleImages, 8000);

function imageShuffleAdd () {
  clearInterval(id);
  shuffleImages(false);
  id = setInterval(shuffle, 8000);
}

function imageShuffleSub () {
  clearInterval(id);
  shuffleImages(true);
  id = setInterval(shuffle, 8000);
}

function toggleFooter() {
  let element = document.getElementsByTagName("footer")[0];
  element.classList.toggle("hide");
}

window.addEventListener('mousewheel', function(e){
    let element = document.getElementsByTagName("footer")[0];
    let wDelta = e.wheelDelta < 0 ? 'down' : 'up';
    if (wDelta === 'down') {
      element.classList.remove("hide");
    }
    else {
      element.classList.add("hide");
    }
});
