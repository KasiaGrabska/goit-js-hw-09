//instalacja bibilioteki flatpickr
//funkcja flatpicker
//onClose
//selectedDates
//window.alert()
//convertMs
//addLeadingZero(value), która używa metody padStart()

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const timer = document.querySelector('.timer');
const buttonStart = document.querySelector('button[data-start]');
const dataDays = document.querySelector('.value[data-days]');
const dataHours = document.querySelector('.value[data-hours]');
const dataMinutes = document.querySelector('.value[data-minutes]');
const dataSeconds = document.querySelector('.value[data-seconds]');

let selectedDate;
let intervalId;

flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0];
    if (selectedDate < new Date()) {
      window.alert('Please choose a date in the future');
      buttonStart.disabled = true;
    } else {
      buttonStart.disabled = false;
    }
  },
});

buttonStart.addEventListener('click', () => {
  startTimer();
});

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}

function startTimer() {
  buttonStart.disabled = true; // Wyłącz przycisk "Start" po kliknięciu
  intervalId = setInterval(() => {
    const now = new Date();
    const msDifference = selectedDate - now;
    if (msDifference <= 0) {
      clearInterval(intervalId); // Zatrzymaj odliczanie, gdy osiągnięto datę docelową
      buttonStart.disabled = false; // Włącz przycisk "Start" po zakończeniu odliczania
      return;
    }
    const { days, hours, minutes, seconds } = convertMs(msDifference);
    dataDays.textContent = days;
    dataHours.textContent = hours;
    dataMinutes.textContent = minutes;
    dataSeconds.textContent = seconds;
  }, 1000);
}

buttonStart.addEventListener('click', startTimer);
