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

flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    if (selectedDate < new Date()) {
      window.alert('Please choose a date in the future');
      buttonStart.disabled = true;
    } else {
      buttonStart.disabled = false;
    }
  },
});
