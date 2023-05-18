'use strict';

import Utility from './../utils/Utility.js';

const utility = new Utility();

const curUser = JSON.parse(sessionStorage.getItem('currentUser'));
const logout = document.querySelector('.logout');

const baseURL = 'https://webheadapi.onrender.com';

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

logout.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('test');
  location.href = './../index.html';
});
