const express = require("express");
const router = express.Router();
const {registerUser, loginUser} = require("../controllers/userAuthController");

router.get("/", (req, res) => {
  res.send("router is working");
});

router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
