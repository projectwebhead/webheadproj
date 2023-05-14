'use strict';

const usernames = document.querySelector('.username');
const passwords = document.querySelector('.password');
const btnLogin = document.querySelector('.login');

const baseURL = 'http://127.0.0.1:8008';

const login = async (username, password) => {
  try {
    const res = await axios({
      method: 'POST',
      url: `${baseURL}/api/v1/auth/login`,
      data: {
        username,
        password,
      },
    });

    if (res.data.status === 'success') {
      console.log(res.data.data);
      alert(`${res.data.message}`);
      location.href = './../index.html';
    } else {
      console.log(res.data);
      alert(`${res.data.message}`);
    }
  } catch (err) {
    console.log(err.response.data);
  }
};

btnLogin.addEventListener('click', (e) => {
  e.preventDefault();

  login(usernames.value, passwords.value);
});
