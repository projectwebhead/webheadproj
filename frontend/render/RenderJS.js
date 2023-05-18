'use strict';

import Javascript from './../contents/Javascript.js';

class RenderJS {
  javascript = new Javascript();

  JsFun1 = this.javascript.part1;
  JsFun2 = this.javascript.part2;
  JsFun3 = this.javascript.devTools;
  JsFun4 = this.javascript.part3;
  JsFun5 = this.javascript.problemSovling;
  JsFun6 = this.javascript.understandingErrors;
  JsFun7 = this.javascript.PROJECT;

  constructor() {}

  renderContent(topicNumber) {
    const parent = document.querySelector('.parent-content');
    let javascript = this.JsFun1;

    switch (topicNumber) {
      case 17:
        javascript = this.JsFun1;
        break;
      case 18:
        javascript = this.JsFun2;
        break;
      case 19:
        javascript = this.JsFun3;
        break;
      case 20:
        javascript = this.JsFun4;
        break;
      case 21:
        javascript = this.JsFun5;
        break;
      case 22:
        javascript = this.JsFun6;
        break;
      case 23:
        javascript = this.JsFun7;
        break;
    }

    parent.insertAdjacentHTML('beforeend', javascript);
  }
}

export default RenderJS;
