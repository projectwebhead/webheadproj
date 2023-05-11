'use strict';

const username = document.querySelector('.username');
const password = document.querySelector('.password');
const btnSignup = document.querySelector('.sign-up');

const baseURL = 'http://127.0.0.1:8008';

const login = async (username, password) => {
  try {
    const res = await axios({
      method: 'POST',
      url: `${baseURL}/api/v1/auth/signup`,
      data: {
        username,
        password,
      },
    });

    if (res.data.status === 'success') {
      console.log(res.data.data);
      alert(`${res.data.message}`);
    } else {
      console.log(res.data);
      alert(`${res.data.message}`);
    }
  } catch (err) {
    console.log(err);
  }
};

btnSignup.addEventListener('click', (e) => {
  e.preventDefault();

  login(username.value, password.value);
});
