const express = require("express")
const router = express.Router()

router.get("/", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.status(200).send("Hello world")
})

module.exports = router
