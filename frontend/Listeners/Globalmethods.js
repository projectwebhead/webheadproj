"use strict";

class GlobalMethods {
  challengesSectionEl = document.querySelector(".challenge-section");
  questionBoxContainerAllEl = document.querySelectorAll(
    ".question-box-container"
  );
  btnShowAnswer = document.querySelectorAll(".show-answer__btn");

  constructor() {}

  _smoothScroll(element) {
    element.scrollIntoView({ behavior: "smooth" });
  }

  _smoothScrollCallback = (section, topic, number) =>
    document.querySelector(`.${section}-${topic}-q--${number}`);

  _switchAccordion = (chall) => {
    document
      .querySelectorAll(".accordion")
      .forEach((c) => c.classList.add("hide-content"));

    document
      .querySelector(`.accordion--${chall}`)
      .classList.remove("hide-content");
  };

  _switchMode = (mode, opt1, opt2) => (mode === opt1 ? opt2 : opt1);

  _hideContentToggle = function (topic, chall, e, btn) {
    e.preventDefault();
    const clicked = e.target.closest(btn);

    if (!clicked) return;

    this.questionBoxContainerAllEl.forEach((c) =>
      c.classList.add("hide-content")
    );

    document
      .querySelector(`.${topic}-${chall}-q--${clicked.dataset.tab}`)
      .classList.remove("hide-content");
  };

  _markAsDone = (topic, btn, chalSec, click) => {
    btn.style.backgroundColor = "green";
    btn.textContent = "Mark as done";

    click.addEventListener("click", (e) => {
      document
        .querySelector(`.${topic}-${chalSec}-cm-${click.dataset.tab}`)
        .classList.remove("hide-content");
      this._smoothScroll(this.challengesSectionEl);
    });
  };

  _tryAgain = (btn) => {
    btn.style.backgroundColor = "red";
    btn.textContent = "Try again";
  };

  _obStyle = (chall, ans) => {
    if (chall === null) return;

    chall.value = `${ans}`;
    chall.style.backgroundColor = "#6a599a";
    chall.style.border = "1px solid #c6b8f2";
  };

  _showAnswer = (
    chall1,
    chall2 = null,
    chall3 = null,
    chall4 = null,
    chall5 = null,
    chall6 = null,
    ans1 = null,
    ans2 = null,
    ans3 = null,
    ans4 = null,
    ans5 = null,
    ans6 = null
  ) => {
    this.btnShowAnswer.forEach((btn) =>
      btn.addEventListener("click", (e) => {
        e.preventDefault();

        chall1.value = `${ans1}`;
        chall1.style.backgroundColor = "#6a599a";
        chall1.style.border = "1px solid #c6b8f2";

        this._obStyle(chall2, ans2);
        this._obStyle(chall3, ans3);
        this._obStyle(chall4, ans4);
        this._obStyle(chall5, ans5);
        this._obStyle(chall6, ans6);
      })
    );
  };
}

export default GlobalMethods;
