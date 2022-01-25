const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
let secondDegrees = 0;
let minuteDegrees = 0;
let hourDegrees = 0;

console.log(secondHand);

const handRotate = (hand, degrees) => {
  hand.style.transform = `rotate(${degrees}`;
};

setInterval(() => {
  secondDegrees += 6;
  minuteDegrees += 0.1;
  hourDegrees += 0.0017;
  handRotate(secondHand, `${secondDegrees}deg`);
  handRotate(minuteHand, `${minuteDegrees}deg`);
  handRotate(hourHand, `${hourDegrees}deg`);
}, 1000);
