//todo: JS way

const fillBar = (seconds) => {
  const bar = document.querySelector(".bar");
  let atPercent = 0;
  const interval = setInterval(() => {
    bar.style.width = atPercent + "%";
    atPercent++;
    if (atPercent > 100) clearInterval(interval);
  }, (seconds * 1000) / 100);
};

/* ------------------------------------ */

//todo: CSS way -better and easier-

/*
const fillBar = (seconds) => {
  const bar = document.querySelector(".bar");
  bar.style.transition = `${seconds}s linear width`;
  bar.style.width = "100%";
};
*/
