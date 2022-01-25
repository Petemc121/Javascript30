document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

function keyDownHandler(e) {
  const key = document.querySelectorAll(
    `[data-key='${e.keyCode.toString()}']`
  )[0];
  const audio = document.querySelectorAll(
    `[data-key='${e.keyCode.toString()}']`
  )[1];
  key.classList.add("playing");
  audio.play();
}

function keyUpHandler(e) {
  const key = document.querySelectorAll(
    `[data-key='${e.keyCode.toString()}']`
  )[0];
  const audio = document.querySelectorAll(
    `[data-key='${e.keyCode.toString()}']`
  )[1];
  key.classList.remove("playing");
  audio.pause();
  audio.currentTime = 0;
}
