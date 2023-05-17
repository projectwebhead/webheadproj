'use strict';

import Css from './../contents/Css.js';

class RenderCSS {
  css = new Css();

  CssFun1 = this.css.foundations;
  CssFun2 = this.css.inspectingHtmlAndCss;
  CssFun3 = this.css.theBoxModedl;
  CssFun4 = this.css.blockAndInline;

  constructor() {}

  renderContent(topicNumber) {
    const parent = document.querySelector('.parent-content');
    let css = this.CssFun1;

    switch (topicNumber) {
      case 8:
        css = this.CssFun1;
        break;
      case 9:
        css = this.CssFun2;
        break;
      case 10:
        css = this.CssFun3;
        break;
      case 11:
        css = this.CssFun4;
        break;
    }

    parent.insertAdjacentHTML('beforeend', css);
  }
}

export default RenderCSS;
