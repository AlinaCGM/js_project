'use strict';
//const btnOn = document.querySelector('.btnOn');
// const btnOff = document.querySelector('.btnOff');

// btnOn.addEventListener('click', function () {
//   lamp.src = 'on.jpg';
// });
// btnOff.addEventListener('click', function () {
//   lamp.src = 'off.jpg';
// });

// ----------------------------Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
////////////

//------------1. SCROLLING

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  section1.scrollIntoView({ behavior: 'smooth' });
});
///////////////////////////////////////
//------------------PAGE NAVIGATION------------------
//                FIRST WAY TO DO THIS
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });
//                SECOND WAY TO DO THIS
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  //Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
///////////////////////////
//  ------------------------LESSON--------------------
//Selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);
document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);
document.getElementsByClassName('btn');

//Creating and inserting elements
//.insertAdjacentHTML

const message = document.createElement('div'); //  1! 'message' is object which represent DOM element
message.classList.add('cookie-message'); // 2!! added a class to this div
//message.textContent = 'We use cookies for improved functionality and analytics';
message.innerHTML = //  3!! wrote some text inside
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
header.prepend(message); //   4!! added it before header ,as a first child
//header.append(message); //   5!! OR at the end of header ,as a last child

//We CAN ALSO CLONE the message in order to add it in many places,
//EXAMPLE:
header.append(message.cloneNode(true));
//and 2 more methods:
// header.before(message);
// header.after(message);
//-------DElete element--------
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

//styles
message.style.backgroundColor = '#37383d';
message.style.width = '1200%';

//change the css property. ('was this','changed to this')
document.documentElement.style.setProperty('--color-primary', 'orangered');

//Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src); ///absolute link
console.log(logo.getAttribute('src')); // relative link

////---------------- SMOTH SCROLL --------------

// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');

// btnScrollTo.addEventListener('click', function (e) {
//   const s1coords = section1.getBoundingClientRect();
//   //console.log(s1coords);
//   //console.log(e.target.getBoundingClientRect());
//   //console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

//   //Scrolling

//   // ---------------------------------------1 OPTION //the old way

//   // window.scrollTo(
//   //   s1coords.left + window.pageXOffset,
//   //   s1coords.top + window.pageYOffset
//   // );
//   //---------------------------------------2 OPTION //the old way
//   // window.scrollTo({
//   //   left: s1coords.left + window.pageXOffset,
//   //   top: s1coords.top + window.pageYOffset,
//   //   behavior: 'smooth',
//   // });

//   //--------------------------------------3 OPTION THE BEST!!
//   section1.scrollIntoView({ behavior: 'smooth' });
// });

//--------------------EVENT listeners
//
// const h1 = document.querySelector('h1');

// //hover event
// const alertH1 = function (e) {
//   alert('Great!');
//   // h1.removeEventListener('mouseenter', alertH1);  it can be here or as a setTimeout
// };
// h1.addEventListener('mouseenter', alertH1);
// //the old way
// // h1.onmouseenter = function (e) {
// //   alert('Second event!!');
// // };
// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// //---------------------Random COLOR------------------
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   //the event will work in all the parent elements as well
//   //to stop it and work in just current child element do as below!!!!!!
//   e.stopPropagation();
// });
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
// });
// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
// });

//------------------Dom Traversing ------
