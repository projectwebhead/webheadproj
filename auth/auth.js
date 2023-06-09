'use strict';

const usernames = document.querySelector('.username');
const passwords = document.querySelector('.password');
const btnLogin = document.querySelector('.login');

// Web Head API
const baseURL = 'https://webheadapi.onrender.com';

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
      var jsonContact = [{ id: res.data.data._id }];
      sessionStorage.setItem(
        'currentUser',
        JSON.stringify(jsonContact)
      );

      location.href = './../main.html';
    } else {
      alert(`${res.data.message}`);
    }
  } catch (err) {
    console.log(err.response.data);
  }
};
const users = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: `${baseURL}/api/v1/auth/login`,
    });
  } catch (err) {
    console.log(err.response.data);
  }
};

users();
btnLogin.addEventListener('click', (e) => {
  e.preventDefault();
  login(usernames.value, passwords.value);
});
