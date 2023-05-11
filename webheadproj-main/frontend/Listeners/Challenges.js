"use strict";

import GlobalMethods from "./Globalmethods.js";
import Api from "../../API/Api.js";
import Elements from "../Selectors/Elements.js";

const global = new GlobalMethods();
const api = new Api();
const el = new Elements();

class Challenges {
  constructor() {
    // Fetch answers from database
    api._getAnswers();
  }

  _chechAnswer1() {
    el.btnAtt1.addEventListener("click", (e) => {
      e.preventDefault();
      const clicked = e.target;
      const answer1 = document.querySelector(".att-1--a");

      global._showAnswer(
        answer1,
        null,
        null,
        null,
        null,
        null,
        api.data[0].questions.first.a
      );

      answer1.value === api.data[0].questions.first.a
        ? global._markAsDone("h", el.btnAtt1, "att", clicked)
        : global._tryAgain(el.btnAtt1);
      console.log("test");
    });
  }
}

export default Challenges;
