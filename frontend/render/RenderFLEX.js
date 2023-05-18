'use strict';

import Flex from './../contents/Flexbox.js';

class RenderFLEX {
  flex = new Flex();

  FlexFun1 = this.flex.introductionToFlexbox;
  FlexFun2 = this.flex.growingAndShrinking;
  FlexFun3 = this.flex.axes;
  FlexFun4 = this.flex.alignment;
  FlexFun5 = this.flex.PROJECTLandingPage;

  constructor() {}

  renderContent(topicNumber) {
    const parent = document.querySelector('.parent-content');
    let flex = this.FlexFun1;

    switch (topicNumber) {
      case 12:
        flex = this.FlexFun1;
        break;
      case 13:
        flex = this.FlexFun2;
        break;
      case 14:
        flex = this.FlexFun3;
        break;
      case 15:
        flex = this.FlexFun4;
        break;
      case 16:
        flex = this.FlexFun5;
        break;
    }

    parent.insertAdjacentHTML('beforeend', flex);
  }
}

export default RenderFLEX;
