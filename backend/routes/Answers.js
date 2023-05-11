const express = require("express");
const router = express.Router();

const RetrieveService = require("../services/Retrieve");

router.get("/retrieve", async (req, res) => {
  const results = await RetrieveService();

  if (results) {
    res.status(200).send(results);
  } else {
    res.status(500).send({
      status: results,
      message: "Answers not retrieved!",
    });
  }
});

module.exports = router;
