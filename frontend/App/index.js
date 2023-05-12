'use strict';

const htmlFun1 = document.querySelector('.html-fun-1');

htmlFun1.addEventListener('click', (e) => {
  e.preventDefault();
  location.href = './../../main-content-html/html-content.html';
  console.log('test');
});
