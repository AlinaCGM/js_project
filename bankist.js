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
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

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
//-----------------------Tabbed component-------------

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  //Guard cause
  if (!clicked) return;
  //Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  //Activate tab
  clicked.classList.add('operations__tab--active');
  //Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});
//
//-----------------Menu fade animation---------------
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
//Passing 'argument' into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

//
//
//----------------Sticky navigation--------------
// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);
// window.addEventListener('scroll', function (e) {
//   console.log(window.scrollY);
//   if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });
// //----------------Sticky navigation: IntersectionObserver()--------------
// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };
// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };
// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

//another way to do that
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries; //or destructure other way const [entry]=entries[0]
  console.log(entry);
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);
//
//
//-----------------Reveal sections 8fade in effect
const allSections = document.querySelectorAll('.section');
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});
/////////////////////////////////////////////////
//
//
//----------------------LaZY LOADING IMAGES---------------------------

const imgTargets = document.querySelectorAll('img[data-src'); //we selected just images with data-src in html
const loadImg = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  //Replace src with data-src

  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};
const imgObserver = new IntersectionObserver(loadImg, {
  roor: null,
  threshold: 0,
  rootMargin: '200px', //for img load fast, but we can use setTimeout to get oposite action
});
imgTargets.forEach(img => imgObserver.observe(img));
////////////////////////////////////////////////////
//
//
//---------------------------Slider component--------------
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  //Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };
  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };
  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  //Next slide
  const nestSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };
  init();
  //Event handlers

  btnRight.addEventListener('click', nestSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    console.log(e);
    if (e.key === 'ArrowLeft') prevSlide();
    //OR
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const slide = e.target.dataset.slide;
      //Or destructure it : const {slide} = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();
//////////////////////////////////
//  ------------------------LESSON--------------------
// //Selecting elements
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);
// const header = document.querySelector('.header');
// const allSections = document.querySelectorAll('.section');
// console.log(allSections);
// document.getElementById('section--1');
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);
// document.getElementsByClassName('btn');

// //Creating and inserting elements
// //.insertAdjacentHTML

// const message = document.createElement('div'); //  1! 'message' is object which represent DOM element
// message.classList.add('cookie-message'); // 2!! added a class to this div
// //message.textContent = 'We use cookies for improved functionality and analytics';
// message.innerHTML = //  3!! wrote some text inside
//   'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
// header.prepend(message); //   4!! added it before header ,as a first child
// //header.append(message); //   5!! OR at the end of header ,as a last child

// //We CAN ALSO CLONE the message in order to add it in many places,
// //EXAMPLE:
// header.append(message.cloneNode(true));
// //and 2 more methods:
// // header.before(message);
// // header.after(message);
// //-------DElete element--------
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//   });

// //styles
// message.style.backgroundColor = '#37383d';
// message.style.width = '1200%';

// //change the css property. ('was this','changed to this')
// document.documentElement.style.setProperty('--color-primary', 'orangered');

// //Attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src); ///absolute link
// console.log(logo.getAttribute('src')); // relative link

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

// const h1 = document.querySelector('h1');
// //------------------------------Going downwards: child
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes); //all the elements inside it
// console.log(h1.children); //just direct children
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';
// //------------------------------Going upwards: parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);
// h1.closest('.header').style.background = 'var(--gradient-secondary)';
// h1.closest('h1').style.background = 'var(--gradient-primary)';
// //------------------------------Going sideway: siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });

//----------------Lifecycle DOM Events----------------
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML tratatata', e);
});
window.addEventListener('load', function (e) {
  console.log('Page fully loaded', e);
});
// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   e.returnValue = '';
// });
