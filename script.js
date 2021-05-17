var arrayOfShuffleImages = [{
    imagesrc: "assets/10283.png",
    set: "10283",
    name: "NASA Space Shuttle Discovery"
  },
  {
    imagesrc: "assets/10266.png",
    set: "10266",
    name: "NASA Apollo 11 Lunar Lander"
  },
  {
    imagesrc: "assets/92176.png",
    set: "92176",
    name: "NASA Apollo Saturn V"
  }
];
var id;
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
  } else {
    if (currentImage === 0) {
      currentImage = 2;
    } else {
      --currentImage;
    }
  }
  document.getElementsByClassName("back")[0].childNodes[0].src = arrayOfShuffleImages[currentImage].imagesrc;
  document.querySelector(".text > h1").innerHTML = '<button onclick="imageShuffleSub()"><i class="fas fa-less-than"></i></button>'
                                                    + arrayOfShuffleImages[currentImage].set
                                                    + '<button onclick="imageShuffleAdd()"><i class="fas fa-greater-than"></i></button>';
  document.querySelector(".text > h2").innerHTML = arrayOfShuffleImages[currentImage].name;
  header_front.classList.toggle("front");
  header_front.classList.toggle("back");
  header_back.classList.toggle("front");
  header_back.classList.toggle("back");
}

function addRemoveElements() {
  if (screen.width < 767) {
    id = setInterval(shuffleImages, 8000);
    document.getElementById("navigation-links").classList.add("noshow");
  }

  if (screen.width > 1023) {
    document.getElementById("navigation-links").classList.remove("noshow");
    document.querySelector(".text > h1").innerHTML = "LEGO x NASA";
    document.querySelector(".text > h2").innerHTML = "All NASA LEGO sets";
  } else {
    document.getElementById("navigation-links").classList.add("noshow");
  }
}

addRemoveElements();

function imageShuffleAdd() {
  clearInterval(id);
  shuffleImages(false);
  id = setInterval(shuffleImages, 8000);
}

function imageShuffleSub() {
  clearInterval(id);
  shuffleImages(true);
  id = setInterval(shuffleImages, 8000);
}

function toggleFooter() {
  let element = document.getElementsByTagName("footer")[0];
  element.classList.toggle("hide");
}

window.addEventListener('resize', () => {
  addRemoveElements();
})

window.addEventListener('mousewheel', function(e) {
  let element = document.getElementsByTagName("footer")[0];
  let wDelta = e.wheelDelta < 0 ? 'down' : 'up';
  if (wDelta === 'down') {
    element.classList.remove("hide");
  } else {
    element.classList.add("hide");
  }
});

// disable scroll when nav is Open
var keys = {
  37: 1,
  38: 1,
  39: 1,
  40: 1
};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function() {
      supportsPassive = true;
    }
  }));
} catch (e) {}

var wheelOpt = supportsPassive ? {
  passive: false
} : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}
