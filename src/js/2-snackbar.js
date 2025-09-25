'use strict';

const form = document.querySelector('.form');
form.addEventListener('submit', createPromis());

function createPromis() {
  const delay = event.target.elements.delay.value;
  const state = event.target.elements.state.value;

  return new Promise((resolve, rejectwed) => {
    const task = setTimeout(
      () => {
        if (state === 'fulfilled') {
          resolve(`Fulfilled promise in ${delay}ms`);
        } else if (state === 'rejected') {
          rejectwed(`Rejected promise in ${delay}ms`);
        }
      },
      delay,
      state
    );
  });
}

createPromis()
  .then(value => console.log(value))
  .catch(error => console.log(error));
