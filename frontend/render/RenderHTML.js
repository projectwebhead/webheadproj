'use strict';

import Html from '../contents/Html.js';

class RenderHTML {
  html = new Html();

  HtmlFun1 = this.html.introductionToHtmlAndCss;
  HtmlFun2 = this.html.elementsAndTags;
  HtmlFun3 = this.html.htmlBoilerplate;
  HtmlFun4 = this.html.workingWithText;
  HtmlFun5 = this.html.lists;
  HtmlFun6 = this.html.linksAndImages;
  HtmlFunProject = this.html.PROJECTMusicPlaylist;

  constructor() {
    // this.renderContent();
  }

  renderContent(topicNumber) {
    const parent = document.querySelector('.parent-content');
    let html = this.HtmlFun1;

    switch (topicNumber) {
      case 1:
        html = this.HtmlFun1;
        break;
      case 2:
        html = this.HtmlFun2;
        break;
      case 3:
        html = this.HtmlFun3;
        break;
      case 4:
        html = this.HtmlFun4;
        break;
      case 5:
        html = this.HtmlFun5;
        break;
      case 6:
        html = this.HtmlFun6;
        break;
      case 7:
        html = this.HtmlFunProject;
        break;
    }

    parent.insertAdjacentHTML('beforeend', html);
  }
}

export default RenderHTML;
