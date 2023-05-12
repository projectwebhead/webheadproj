'use strict';

import RenderHTML from '../render/RenderHTML.js';

const viewCourse = document.querySelector('.view-course');
const btnNext = document.querySelector('.next-button');
const parent = document.querySelector('.parent-content');

let contentNum = 1;

const renderHtml = new RenderHTML();
renderHtml.renderContent(contentNum);

parent.classList.add('hidden');
document.getElementById('btn-section').classList.add('hidden');
document.querySelector('footer').classList.add('hidden');

viewCourse.addEventListener('click', (e) => {
  e.preventDefault();
  location.href = './../../main-content-html/course.html';
});

btnNext.addEventListener('click', (e) => {
  e.preventDefault();

  contentNum += 1;
  if (contentNum > 7) return;
  if (parent.childElementCount > 0) {
    parent.removeChild(parent.firstElementChild);
  }
  renderHtml.renderContent(contentNum);

  document
    .querySelector('.header')
    .scrollIntoView({ behavior: 'smooth' });

  const FILE = 'https://cpwebassets.codepen.io/assets/embed/ei.js';

  function loadJS(FILE_URL, async = true) {
    let scriptEle = document.createElement('script');

    scriptEle.setAttribute('src', FILE_URL);
    scriptEle.setAttribute('type', 'text/javascript');
    scriptEle.setAttribute('async', async);

    document.body.appendChild(scriptEle);

    scriptEle.addEventListener('load', () => {
      console.log('File loaded');
    });

    scriptEle.addEventListener('error', (ev) => {
      console.log('Error on loading file', ev);
    });
  }
  loadJS(FILE, true);
});
