const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const ctx = canvas.getContext("2d");
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");

video.addEventListener("canplay", paintToCanvas);

function getVideo() {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((localMediaStream) => {
      console.log(localMediaStream);
      video.srcObject = localMediaStream;
      video.play();
    })
    .catch((err) => {
      console.error(err);
    });
}
getVideo();

function paintToCanvas() {
  console.dir(video);
  const width = video.videoWidth;
  const height = video.videoHeight;
  console.log(height);
  console.log(width);

  canvas.height = height;
  canvas.width = width;

  setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
    //take the pixels out
    let pixels = ctx.getImageData(0, 0, width, height);
    //mess with them
    pixels = redEffect(pixels);
    //put them back
    ctx.putImageData(pixels, 0, 0);
  }, 16);
}

function takePhoto() {
  //playSound
  snap.currentTimes = 0;
  snap.play();

  //take the data out of the canvas

  const data = canvas.toDataURL("image/jpeg");
  const link = document.createElement("a");
  link.href = data;
  link.setAttribute("download", "handsome");
  link.innerHTML = `<img src="${data}" alt="handsome man" />`;

  strip.insertBefore(link, strip.firstChild);

  console.log(data);
}

function redEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i + 0] = pixels.data[i + 0] + 100; //red
    pixels.data[i + 1] = pixels.data[i + 1] - 50; //green
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5; //blue
  }

  return pixels;
}
