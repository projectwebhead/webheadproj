'use strict';

import RenderHTML from '../render/RenderHTML.js';
import RenderCSS from '../render/RenderCSS.js';
import Utility from './../utils/Utility.js';

const viewCourse = document.querySelector('.view-course');
const btnNext = document.querySelector('.next-button');
const parent = document.querySelector('.parent-content');
const parentCourse = document.querySelector('.course');
const btnMarkAsDone = document.querySelector('.mark-as-done-btn');

let contentNum = 1;
let markTab = 0;

const baseURL = 'http://127.0.0.1:8008';

const renderHtml = new RenderHTML();
const renderCss = new RenderCSS();
const utility = new Utility();

const cheboxIcons = document.querySelectorAll('.check-box-icon');

const curUser = JSON.parse(sessionStorage.getItem('currentUser'));

const renderCheckbox = async (id) => {
  try {
    const res = await axios({
      method: 'POST',
      url: `${baseURL}/api/v1/auth/fetchUser`,
      data: {
        _id: id,
      },
    });

    return res.data;
  } catch (err) {
    console.log(err.response.data);
  }
};

const checkbox = async () => {
  const res = await renderCheckbox(curUser);

  console.log(res);
  cheboxIcons.forEach((icon) => {
    if (res.data[icon.dataset.code] == 1) {
      document.querySelector(`.${icon.dataset.code}`).style.fill =
        'lightgreen';
    }
    console.log(`RES CODE${res.data[icon.dataset.code]}`);
  });
};
checkbox();

utility.hide(
  parent,
  document.getElementById('btn-section'),
  document.querySelector('footer')
);

viewCourse.addEventListener('click', (e) => {
  e.preventDefault();

  checkbox();

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
  markTab += 1;
  console.log(markTab);

  // if (contentNum > 7) return;

  utility.renderLimit(parent);
  if (contentNum <= 7) {
    renderHtml.renderContent(contentNum);
  } else if (contentNum > 7 && contentNum <= 11) {
    renderCss.renderContent(contentNum);
  } else {
    console.log('lamar');
  }
  utility.scrollInto('header');
  utility.asyncEmbed(true);
  // utility.removeBtn(contentNum, btnNext);
});

const tabs = document.querySelectorAll('.flex[data-tab]');

tabs.forEach((tab) =>
  tab.addEventListener('click', () => {
    const tabNumber = tab.getAttribute('data-tab');

    contentNum = Number(tabNumber);
    markTab = Number(contentNum);

    utility.renderLimit(parent);
    
    if (contentNum <= 7) {
      renderHtml.renderContent(contentNum);
    } else if (contentNum > 7 && contentNum <= 11) {
      renderCss.renderContent(contentNum);
    } else {
      console.log('lamar');
    }

    utility.show(
      parent,
      document.getElementById('btn-section'),
      document.querySelector('footer')
    );

    utility.asyncEmbed(true);
    utility.hide(parentCourse);
  })
);

function markSwitch(num) {
  switch (num) {
    case 1:
      return { h1: 1 };
      break;
    case 2:
      return { h2: 1 };
      break;
    case 3:
      return { h3: 1 };
      break;
    case 4:
      return { h4: 1 };
      break;
    case 5:
      return { h5: 1 };
      break;
    case 6:
      return { h6: 1 };
      break;
    case 7:
      return { h7: 1 };
      break;
    case 8:
      return { c1: 1 };
      break;
    case 9:
      return { c2: 1 };
      break;
    case 10:
      return { c3: 1 };
      break;
    case 11:
      return { c4: 1 };
      break;
  }
}

const markAsDone = async (id, course) => {
  try {
    const res = await axios({
      method: 'POST',
      url: `${baseURL}/api/v1/auth/save`,
      data: {
        id,
        course,
      },
    });

    if (res.data.status === 'success') {
      console.log(res.data);
      alert(`${res.data.message}`);
    } else {
      console.log(res.data);
      alert(`${res.data.message}`);
    }
  } catch (err) {
    console.log(err);
  }
};

btnMarkAsDone.addEventListener('click', (e) => {
  e.preventDefault();

  checkbox();
  const currentUser = JSON.parse(
    sessionStorage.getItem('currentUser')
  );
  console.log(currentUser);
  const currentTab = markSwitch(markTab);

  markAsDone(currentUser[0].id, currentTab);
});

// const checkH1 = document.querySelector('.h1');

// checkH1.style.fill = 'white';
