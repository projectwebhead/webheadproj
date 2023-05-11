"use strict";

class Api {
  result;
  data;

  constructor() {}

  // Fetch answers from database
  async _getAnswers() {
    this.result = await axios.get(`http://localhost:3001/answers/retrieve`);

    this.data = this.result.data;
    console.log(this.data);
  }
}

export default Api;
