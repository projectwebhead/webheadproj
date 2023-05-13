'use strict';

import RenderHTML from '../render/RenderHTML.js';
import Utility from './../utils/Utility.js';

const viewCourse = document.querySelector('.view-course');
const btnNext = document.querySelector('.next-button');
const parent = document.querySelector('.parent-content');
const parentCourse = document.querySelector('.course');

let contentNum = 1;

const renderHtml = new RenderHTML();
const utility = new Utility();

// renderHtml.renderContent(contentNum);

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

const tabs = document.querySelectorAll('.flex[data-tab]');
tabs.forEach((tab) =>
  tab.addEventListener('click', () => {
    const tabNumber = tab.getAttribute('data-tab');

    contentNum = Number(tabNumber);

    utility.renderLimit(parent);
    renderHtml.renderContent(contentNum);

    utility.show(
      parent,
      document.getElementById('btn-section'),
      document.querySelector('footer')
    );

    utility.asyncEmbed(true);
    utility.hide(parentCourse);
  })
);
