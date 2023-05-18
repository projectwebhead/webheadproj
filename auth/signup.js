'use strict';

const username = document.querySelector('.username');
const password = document.querySelector('.password');
const btnSignup = document.querySelector('.sign-up');

const baseURL = 'https://webheadapi.onrender.com';

const login = async (username, password, id) => {
  try {
    const res = await axios({
      method: 'POST',
      url: `${baseURL}/api/v1/auth/signup`,
      data: {
        username,
        password,
        id,
      },
    });

    if (res.data.status === 'success') {
      alert(`${res.data.message}`);
      location.href = './../login/login.html';
    } else {
      alert(`${res.data.message}`);
    }
  } catch (err) {
    console.log(err);
  }
};

btnSignup.addEventListener('click', async (e) => {
  e.preventDefault();
  const id = await axios({
    method: 'GET',
    url: `${baseURL}/api/v1/auth/login`,
  });
  login(username.value, password.value, id.data.data.length + 1);
});
