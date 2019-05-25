'use strict';

const burger = document.querySelector('#nav-toggle');
const menu = document.querySelector('.menu');
const lis = document.querySelectorAll('.menu li a');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menu.classList.toggle('visible');
});

lis.forEach((li) => {
  li.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('visible');
  })
})

