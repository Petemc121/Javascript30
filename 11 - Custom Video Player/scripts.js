//elements

const player = document.querySelector(".player");
const video = document.querySelector(".player__video.viewer");
const progress = document.querySelector(".progress__filled");
const playToggle = document.querySelector(".player__button.toggle");
const volumeSlider = document.querySelector(".player__slider[name=volume]");
const speedSlider = document.querySelector(
  ".player__slider[name=playbackRate]"
);
const skipButtons = document.querySelectorAll(".player__button[data-skip]");

//event listeners

playToggle.addEventListener("click", playPause);
video.addEventListener("click", playPause);
video.addEventListener("timeupdate", handleProgress);
volumeSlider.addEventListener("change", handleVolumeChange);
speedSlider.addEventListener("change", handleSpeedChange);
skipButtons.forEach((skipButton) => {
  skipButton.addEventListener("click", handleSkip);
});

function playPause() {
  if (video.paused) {
    video.play();
    playToggle.innerHTML = `⏸️`;
  } else {
    video.pause();
    playToggle.innerHTML = `▶️`;
  }
}

function handleProgress(e) {
  const percentPlayed = (e.target.currentTime / e.target.duration) * 100 + "%";
  progress.style.flexBasis = percentPlayed;
}

function handleVolumeChange(e) {
  video.volume = e.target.value;
}

function handleSpeedChange(e) {
  video.playbackRate = e.target.value;
}

function handleSkip(e) {
  console.log(e.target.dataset.skip);
  video.currentTime += parseFloat(e.target.dataset.skip);
}
