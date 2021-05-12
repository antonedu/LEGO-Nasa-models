function toggleMenu() {
  document.getElementById("navigation-links").classList.toggle("noshow");
}

function addOrRemoveElements() {
  if (screen.width < 768) {
    document.getElementById("navigation-links").classList.add("noshow");
  }

  if (screen.width > 1023) {
    document.getElementById("navigation-links").classList.remove("noshow");
  }
}

addOrRemoveElements();

window.addEventListener('resize', () => {
  addOrRemoveElements();
})

function toggleFooter() {
  let element = document.getElementsByTagName("footer")[0];
  element.classList.toggle("hide");
}

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
