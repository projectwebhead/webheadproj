'use strict';

class Utility {
  constructor() {}

  hide(...element) {
    element.forEach(function (el) {
      el.classList.add('hidden');
    });
  }

  show(...element) {
    element.forEach(function (el) {
      el.classList.remove('hidden');
    });
  }

  renderLimit(parent) {
    if (parent.childElementCount > 0) {
      parent.removeChild(parent.firstElementChild);
    }
  }

  scrollInto(element) {
    document
      .querySelector(`.${element}`)
      .scrollIntoView({ behavior: 'smooth' });
  }

  removeBtn(contentNum, btn) {
    if (contentNum == 7) {
      btn.classList.add('hidden');
    }
  }

  asyncEmbed(async = true) {
    const FILE = 'https://cpwebassets.codepen.io/assets/embed/ei.js';

    let scriptEle = document.createElement('script');

    scriptEle.setAttribute('src', FILE);
    scriptEle.setAttribute('type', 'text/javascript');
    scriptEle.setAttribute('async', async);

    document.body.appendChild(scriptEle);

    scriptEle.addEventListener('load', () => {
      console.log('File loaded');
    });

    scriptEle.addEventListener('error', (ev) => {
      console.log('Error on loading file', ev);
    });
  }

  progressCounter(i, topic, code, profileData) {
    topic = 0;

    for (i = 0; i < 7; i++) {
      if (profileData[`${code}${i + 1}`] == 1) {
        topic += 1;
      }
    }
    return topic;
  }
}

export default Utility;
