`use strict`;

function btn() {
  const start = document.querySelector(".re-start");
  const startFinish = document.querySelector(".start");

  let value = startFinish.innerHTML;

  ++value;

  startFinish.innerHTML = value;

  if (value >= 60) {
    startFinish.innerHTML = 1;

    let count = start.innerHTML;

    ++count;

    start.innerHTML = count;
  }
}

function btn2() {
  const zero = document.querySelector(".zero");

  value = zero.innerHTML;
  ++value;

  zero.innerHTML = value;

  if (value > 10) {
    alert(`you have reached your limit`);
  }
}
