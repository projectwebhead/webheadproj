'use strict';

import RenderHTML from '../render/RenderHTML.js';
import Utility from './../utils/Utility.js';

const viewCourse = document.querySelector('.view-course');
const btnNext = document.querySelector('.next-button');
const parent = document.querySelector('.parent-content');
const parentCourse = document.querySelector('.course');
const htmlFun1 = document.querySelector('.html-fun-1');

let contentNum = 1;

const renderHtml = new RenderHTML();
const utility = new Utility();

renderHtml.renderContent(contentNum);

utility.hide(
  parent,
  document.getElementById('btn-section'),
  document.querySelector('footer')
);

viewCourse.addEventListener('click', (e) => {
  e.preventDefault();

  utility.hide(
    parent,
    document.getElementById('btn-section'),
    document.querySelector('footer')
  );

  utility.show(parentCourse);
  utility.scrollInto('header');

  contentNum = 1;
});

btnNext.addEventListener('click', (e) => {
  e.preventDefault();

  contentNum += 1;

  if (contentNum > 7) return;

  utility.renderLimit(parent);
  renderHtml.renderContent(contentNum);
  utility.scrollInto('header');
  utility.asyncEmbed(true);
  utility.removeBtn(contentNum, btnNext);
});

htmlFun1.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('test');

  renderHtml.renderContent(contentNum);
  if (parent.childElementCount > 0) {
    parent.removeChild(parent.firstElementChild);
  }

  parentCourse.classList.add('hidden');
  parent.classList.remove('hidden');
  document.getElementById('btn-section').classList.remove('hidden');
  document.querySelector('footer').classList.remove('hidden');
});
