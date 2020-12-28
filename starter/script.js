'use strict';
// const showBtns = document.querySelectorAll('.show-modal');
// const hiddenSwitch = document.querySelectorAll('.hidden');
// const closeBtn = document.querySelector('.close-modal');
// const overlay = document.querySelector('.overlay');
// const modal = document.querySelector('.modal');

// console.log(hiddenSwitch);

// // SHOW FUNC

// function showContent() {
//   // for (let i = 0; i < hiddenSwitch.length; i++) {
//   //   hiddenSwitch[i].style.display = 'block';
//   // }

//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// }

// // HIDDEN FUNC

// function hiddenContent() {
//   // for (let i = 0; i < hiddenSwitch.length; i++) {
//   //   hiddenSwitch[i].style.display = 'none';
//   // }

//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// }

// // CLICK SHOW MODEL BUTTONS ACTION

// for (let i = 0; i < showBtns.length; i++) {
//   showBtns[i].addEventListener('click', showContent);
// }

// closeBtn.addEventListener('click', hiddenContent);

// VARS
const showModal = document.querySelectorAll('.show-modal');
const hidden = document.querySelectorAll('.hidden');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

// FUNCs
function openModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
function closeModalFunc() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

// CLICK ACTION
for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', openModal);
}
closeModal.addEventListener('click', closeModalFunc);
overlay.addEventListener('click', closeModalFunc);
document.addEventListener('keydown', function (eventObjectData) {
  if (
    eventObjectData.key === 'Escape' &&
    !overlay.classList.contains('hidden') &&
    !modal.classList.contains('hidden')
  ) {
    closeModalFunc();
    console.log(eventObjectData);
  }
});

// KEY PRESSED

// document.addEventListener('keydown', function (eventObjectData) {
//   console.log(eventObjectData);
// });

// document.addEventListener('keyup', function (eventObjectData) {
//   console.log(eventObjectData);
// });

// document.addEventListener('keypress', function (eventObjectData) {
//   console.log(eventObjectData);
// });
