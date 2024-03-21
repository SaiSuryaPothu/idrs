const express = require("express");
const sendmessage =require("../controllers/messagecontroller.js")
const router = express.Router()

router.post("/contact",sendmessage)

module.exports = router;