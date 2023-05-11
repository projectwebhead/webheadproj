"use strict";

import GlobalMethods from "./Globalmethods.js";

const global = new GlobalMethods();

class Event {
  // Dark mode <-> Light mode
  btnModeToggleEl = document.querySelector(".btn-toggle--mode");
  btnModeEl = document.querySelector(".btn__mode");

  // Buttons
  btnChallengesEl = document.querySelector(".nav-link");
  btnLearnMoreEl = document.querySelector(".learn-more--btn");

  // LEARN (challenge) Buttons
  btnLearnHtmlEl = document.querySelector(".learn-html--btn");
  btnLearnCssEl = document.querySelector(".learn-css--btn");
  btnLearnJsEl = document.querySelector(".learn-js--btn");

  // Challenge section buttons
  btnHtmlEl = document.querySelector(".html--btn");
  btnCssEl = document.querySelector(".css--btn");
  btnJsEl = document.querySelector(".js--btn");

  // Sections
  challengesSectionEl = document.querySelector(".challenge-section");
  logosSectionEl = document.querySelector(".section-logos");

  // HTML Challenges
  htmlAttributesContainerEl = document.querySelector(".html__attributes");
  htmlHeadingsContainerEl = document.querySelector(".html__headings");
  htmlParagraphContainerEl = document.querySelector(".html__paragraph");
  htmlCommentsContainerEl = document.querySelector(".html__comments");
  htmlFormattingContainerEl = document.querySelector(".html__formatting");

  // All QUESTION BOX Container
  questionBoxContainerAllEl = document.querySelectorAll(
    ".question-box-container"
  );

  // Mode Properties
  dark = "moon-sharp";
  light = "sunny-outline";
  mode = this.dark;

  constructor() {}

  _init() {
    // Scroll - (BUTTON) -> (SECTION)
    this._scrollInto(this.btnChallengesEl, this.challengesSectionEl);
    this._scrollInto(this.btnLearnMoreEl, this.logosSectionEl);

    // Scroll - Learn(BUTTON) -> Challenges(SECTION)
    this._scrollToAccordion(this.btnLearnHtmlEl, "html", this.btnHtmlEl);
    this._scrollToAccordion(this.btnLearnCssEl, "css", this.btnCssEl);
    this._scrollToAccordion(this.btnLearnJsEl, "js", this.btnJsEl);

    // Challenges(BUTTON) -> Accordion(CONTENT)
    this._switchAccordionContent(this.btnHtmlEl, `.h-attributes-q--1`, "html");
    this._switchAccordionContent(this.btnCssEl, `.c-selector-q--1`, "css");
    this._switchAccordionContent(this.btnJsEl, `.j-variables-q--1`, "js");

    // DARK MODE <-> LIGHT MODE
    this._toggleMode();

    // TO: --> Challenge -> NEXT Challenge
    this._toChallenges(this.htmlAttributesContainerEl, "h", "attributes");
  }

  // Scroll Button Methods
  _scrollInto(btn, toScroll) {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      global._smoothScroll(toScroll);
    });
  }

  _scrollToAccordion(btn, accordion, challButton) {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      global._switchAccordion(accordion);
      global._smoothScroll(challButton);
    });
  }

  // Challenges(btn) -> Accordion(content)
  _switchAccordionContent(btn, classToSelect, accordion) {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      this.questionBoxContainerAllEl.forEach((c) =>
        c.classList.add("hide-content")
      );

      document.querySelector(classToSelect).classList.remove("hide-content");
      global._smoothScroll(this.challengesSectionEl);
      global._switchAccordion(accordion);
    });
  }

  _toChallenges(btn, section, topic) {
    btn.addEventListener("click", (e) => {
      global._hideContentToggle(section, topic, e, ".exercise-links");
      global._smoothScroll(
        global._smoothScrollCallback(section, topic, e.target.dataset.tab)
      );
    });
  }

  // Toggle(MODE)
  _toggleMode() {
    this.btnModeToggleEl.addEventListener("click", (e) => {
      e.preventDefault();
      this.mode = global._switchMode(this.mode, this.light, this.dark);
      this.btnModeEl.name = this.mode;

      document.querySelector(".sub-heading").classList.toggle("s-h-clr-wm");
      document.querySelector("body").classList.toggle("p-bg-wm");
      document
        .querySelectorAll(".box")
        .forEach((b) => b.classList.toggle("s-b-clr-wm"));
      document
        .querySelectorAll(".desc")
        .forEach((t) => t.classList.toggle("g-t-clr-wm"));
      document
        .querySelectorAll(".tabs")
        .forEach((t) => t.classList.toggle("g-t-clr-wm"));
      this.btnModeEl.classList.toggle("g-t-clr-wm");
      document.querySelector(".primary-text").classList.toggle("s-h-clr-wm");
    });
  }
}

export default Event;
