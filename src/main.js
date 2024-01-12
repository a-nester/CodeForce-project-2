'use strict';

const burgerBtn = document.querySelector('.burger-btn');
const closeBtn = document.querySelector('.close-btn');
const backdrop = document.querySelector('.backdrop');
const burgerMenu = document.querySelector('.burger-menu');

burgerBtn.addEventListener('click', function () {
  backdrop.classList.add('is-open');
  burgerMenu.classList.add('is-open');
});
closeBtn.addEventListener('click', function () {
  backdrop.classList.remove('is-open');
  burgerMenu.classList.remove('is-open');
});
