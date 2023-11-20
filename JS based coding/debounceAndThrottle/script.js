const input = document.querySelector("input");
const defaultText = document.querySelector("#default_text");
const debounceText = document.querySelector("#debounce_text");
const throttleText = document.querySelector("#throttle_text");

const updateDebounceText = debounce(() => {
  incrementCount(debounceText);
});

const updateThrottleText = throttle(() => {
  incrementCount(throttleText);
});

input.addEventListener("input", (e) => {
  defaultText.textContent = e.target.value;
  updateDebounceText(e.target.value);
  updateThrottleText(e.target.value);
});

function debounce(cb, delay = 1000) {
  let timer = null;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}

//! Can be useFull in scrolling and mouse move events
function throttle(cb, delay = 1000) {
  let shouldWait = false;
  let waitingArgs;

  const timeoutFunc = () => {
    if (waitingArgs === null) {
      shouldWait = false;
    } else {
      // reset the timer
      cb(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunc, delay);
    }
  };

  return (...args) => {
    if (shouldWait) {
      waitingArgs = args;
      return;
    }

    cb(...args); // calling first time
    shouldWait = true;

    setTimeout(timeoutFunc, delay);
  };
}

document.addEventListener("mousemove", (e) => {
  incrementCount(defaultText);
  updateDebounceText();
  updateThrottleText();
});

function incrementCount(element) {
  element.textContent = (parseInt(element.innerText) || 0) + 1;
}
