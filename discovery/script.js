// Funktion för att öppna och stänga naviagtion
function toggleMenu() {
  document.getElementById("navigation-links").classList.toggle("noshow");
}

// Funktion för att ta bort och lägga till effekter som endast används i vissa breakpoints
function addOrRemoveElements() {
  if (screen.width < 768) {
    document.getElementById("navigation-links").classList.add("noshow");
  }

  if (screen.width > 1023) {
    document.getElementById("navigation-links").classList.remove("noshow");
  }
}

// Kallar på funktionen för att det ska fungera korrekt vid första laddning av sidan
addOrRemoveElements();

// Då fönstret ändrar storlek kollar det om den ska köra addOrRemoveElements() igen
window.addEventListener('resize', () => {
  addOrRemoveElements();
})

// Funktion som visar eller tar bort footer beroende på om den redan syns eller ej.
function toggleFooter() {
  let element = document.getElementsByTagName("footer")[0];
  element.classList.toggle("hide");
}

// EventHandler som visar footer vid scroll.
window.addEventListener('mousewheel', function(e) {
  let element = document.getElementsByTagName("footer")[0];
  let wDelta = e.wheelDelta < 0 ? 'down' : 'up';
  if (wDelta === 'down') {
    element.classList.remove("hide");
  } else {
    element.classList.add("hide");
  }
});

/* Varning följande är INTE min egna kod den är tagen från StackedOverflow
och den stänger av scrollning då navigationen är öppen */

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
