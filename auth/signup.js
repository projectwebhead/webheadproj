'use strict';

const username = document.querySelector('.username');
const password = document.querySelector('.password');
const btnSignup = document.querySelector('.sign-up');

const baseURL = 'http://127.0.0.1:8008';

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
      console.log(res.data.data);
      alert(`${res.data.message}`);
      location.href = './../login/login.html';
    } else {
      console.log(res.data);
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
