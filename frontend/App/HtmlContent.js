'use strict';

import RenderHTML from '../render/RenderHTML.js';
import RenderCSS from '../render/RenderCSS.js';
import RenderFLEX from '../render/RenderFLEX.js';
import RenderJS from '../render/RenderJS.js';
import Utility from './../utils/Utility.js';

const viewCourse = document.querySelector('.view-course');
const btnNext = document.querySelector('.next-button');
const parent = document.querySelector('.parent-content');
const parentCourse = document.querySelector('.course');
const btnMarkAsDone = document.querySelector('.mark-as-done-btn');

let contentNum = 1;
let markTab = 0;

const baseURL = 'https://webheadapi.onrender.com';

const renderHtml = new RenderHTML();
const renderCss = new RenderCSS();
const renderFlex = new RenderFLEX();
const renderJs = new RenderJS();
const utility = new Utility();

const cheboxIcons = document.querySelectorAll('.check-box-icon');

const curUser = JSON.parse(sessionStorage.getItem('currentUser'));

const logout = document.querySelector('.logout');

const fetchUserData = async (id) => {
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
  const res = await fetchUserData(curUser);

  cheboxIcons.forEach((icon) => {
    if (res.data[icon.dataset.code] == 1) {
      document.querySelector(`.${icon.dataset.code}`).style.fill =
        'lightgreen';
    }
  });
};

const profileInfo = async () => {
  const profile = await fetchUserData(curUser);
  const currentUser = document.querySelector('.current-user');
  const htmlProg = document.querySelector('.html-progress');
  const cssProg = document.querySelector('.css-progress');
  const jsProg = document.querySelector('.js-progress');

  let h = 0,
    c = 0,
    f = 0,
    j = 0;

  let html = 0,
    css = 0,
    flex = 0,
    js = 0;

  const hProg = utility.progressCounter(h, html, 'h', profile.data);
  const cProg = utility.progressCounter(c, css, 'c', profile.data);
  const fProg = utility.progressCounter(f, flex, 'f', profile.data);
  const jProg = utility.progressCounter(j, js, 'j', profile.data);

  currentUser.innerHTML =
    profile.data.username.charAt(0).toUpperCase() +
    profile.data.username.slice(1);

  htmlProg.innerHTML = hProg;
  cssProg.innerHTML = cProg + fProg;
  jsProg.innerHTML = jProg;
};

profileInfo();
checkbox();

utility.hide(
  parent,
  document.getElementById('btn-section'),
  document.querySelector('footer')
);

viewCourse.addEventListener('click', (e) => {
  e.preventDefault();

  checkbox();
  profileInfo();

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

  profileInfo();

  contentNum += 1;
  markTab += 1;

  utility.renderLimit(parent);

  if (contentNum <= 7) {
    renderHtml.renderContent(contentNum);
  } else if (contentNum > 7 && contentNum <= 11) {
    renderCss.renderContent(contentNum);
  } else if (contentNum > 11 && contentNum <= 16) {
    renderFlex.renderContent(contentNum);
  } else if (contentNum > 16 && contentNum <= 23) {
    renderJs.renderContent(contentNum);
  } else {
    console.log('lamar');
  }

  utility.scrollInto('header');
  utility.asyncEmbed(true);
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
    } else if (contentNum > 11 && contentNum <= 16) {
      renderFlex.renderContent(contentNum);
    } else if (contentNum > 16 && contentNum <= 23) {
      renderJs.renderContent(contentNum);
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
    case 12:
      return { f1: 1 };
      break;
    case 13:
      return { f2: 1 };
      break;
    case 14:
      return { f3: 1 };
      break;
    case 15:
      return { f4: 1 };
      break;
    case 16:
      return { f5: 1 };
      break;
    case 17:
      return { j1: 1 };
      break;
    case 18:
      return { j2: 1 };
      break;
    case 19:
      return { j3: 1 };
      break;
    case 20:
      return { j4: 1 };
      break;
    case 21:
      return { j5: 1 };
      break;
    case 22:
      return { j6: 1 };
      break;
    case 23:
      return { j7: 1 };
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
      alert(`${res.data.message}`);
    } else {
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
  const currentTab = markSwitch(markTab);

  markAsDone(currentUser[0].id, currentTab);
});

logout.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('test');
  location.href = './../../index.html';
});
