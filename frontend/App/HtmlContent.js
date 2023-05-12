'use strict';

import RenderHTML from '../render/RenderHTML.js';

const viewCourse = document.querySelector('.view-course');
const btnNext = document.querySelector('.next-button');
const parent = document.querySelector('.parent-content');

let contentNum = 1;

const renderHtml = new RenderHTML();
renderHtml.renderContent(contentNum);

viewCourse.addEventListener('click', (e) => {
  e.preventDefault();
  location.href = './../../main-content-html/index.html';
});

btnNext.addEventListener('click', (e) => {
  e.preventDefault();

  if (parent.childElementCount > 0) {
    parent.removeChild(parent.firstElementChild);
  }

  contentNum += 1;
  renderHtml.renderContent(contentNum);

  document
    .querySelector('.header')
    .scrollIntoView({ behavior: 'smooth' });
});
