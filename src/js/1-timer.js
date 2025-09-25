'use strict';

// Імпорти бібліотек

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

// Оголошення змінних

let userDate;
let isActiveBtn = false;
const startBtn = document.querySelector('[data-start');

// Отримання дати від бібліотеки

const input = document.querySelector('#datetime-picker');
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userDate = selectedDates[0];
    getUserDate();
  },
};
const date = flatpickr(input, options);

//Обробка отриманої дати і активація кнопки старт

function getUserDate() {
  if (userDate.getTime() > Date.now() && isActiveBtn === false) {
    startBtn.removeAttribute('disabled');
    isActiveBtn = true;
  } else if (userDate.getTime() <= Date.now() && isActiveBtn === true) {
    startBtn.setAttribute('disabled', '');
    isActiveBtn = false;
    window.alert('Please choose a date in the future');
  } else {
    window.alert('Please choose a date in the future');
  }
}

// Запуск таймера

startBtn.addEventListener('click', startTimer);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function startTimer() {
  startBtn.setAttribute('disabled', '');
  input.setAttribute('disabled', '');
}
