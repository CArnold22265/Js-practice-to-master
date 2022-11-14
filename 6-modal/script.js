'use strict';
//1.)With larger projects, select the sections you need and them store them into variables first
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModalFunc = function () {
  console.log('button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModalFunc = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModalFunc);

closeModal.addEventListener('click', closeModalFunc);

overlay.addEventListener('click', closeModalFunc);

document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden'))
    closeModalFunc();
});
