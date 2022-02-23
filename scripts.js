import CountDown from "./Countdown.js";

const timer = setInterval(initCountdown, 1000);

function initCountdown() {
  const launchDate = new CountDown('21 July 2022 23:59:59 GMT-0300');
  const days = document.querySelector("[data-time = days]");
  const hours = document.querySelector("[data-time = hours]");
  const minutes = document.querySelector("[data-time = minutes]");
  const seconds = document.querySelector("[data-time = seconds]");

  days.innerText = launchDate._total.days;
  hours.innerText = launchDate._total.hours;
  minutes.innerText = launchDate._total.minutes;
  seconds.innerText = launchDate._total.seconds;

  if (+days.innerText <= 0 && +hours.innerText <= 0 && +minutes.innerText <= 0 && +seconds.innerText <= 0) {
    clearInterval(timer);
    days.innerText = "00";
    hours.innerText = "00";
    minutes.innerText = "00";
    seconds.innerText = "00";
  }
}
