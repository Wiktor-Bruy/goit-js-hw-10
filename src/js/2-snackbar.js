'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
form.addEventListener('submit', createPromis);

function createPromis(event) {
  event.preventDefault();
  const delay = event.target.elements.delay.value;
  const state = event.target.elements.state.value;

  if (delay <= 0) {
    iziToast.warning({
      theme: 'dark',
      title: 'Warning',
      titleColor: '#fff',
      message: 'Not corection delay!',
      messageColor: '#fff',
      backgroundColor: 'red',
      position: 'topRight',
    });
  } else {
    form.reset();
    const prom = new Promise((resolve, rejected) => {
      setTimeout(() => {
        if (state === 'fulfilled') {
          resolve(`Fulfilled promise in ${delay}ms`);
        } else if (state === 'rejected') {
          rejected(`Rejected promise in ${delay}ms`);
        }
      }, delay);
    });

    prom
      .then(value => {
        iziToast.success({
          theme: 'dark',
          message: value,
          messageColor: '#fff',
          backgroundColor: 'gren',
          position: 'topRight',
        });
      })
      .catch(error => {
        iziToast.error({
          theme: 'dark',
          message: error,
          messageColor: '#fff',
          backgroundColor: 'red',
          position: 'topRight',
        });
      });
  }
}
