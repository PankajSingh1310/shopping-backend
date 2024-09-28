const express = require("express");
const router = express.Router();
const {registerUser, loginUser, logoutUser} = require("../controllers/userAuthController");

router.get("/", (req, res) => {
  res.send("router is working");
});

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/logout", logoutUser);

module.exports = router;
