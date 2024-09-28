const express = require("express");
const isLoggedIn = require("../middlewares/isLoggedIn");
const productModel = require("../models/productModel");
const router = express.Router();

router.get("/", (req, res) => {
    const error = req.flash("error");
    res.send(`Landing page ${error}`);
});

router.get("/shop", isLoggedIn, async (req, res) => {
    // const products = await productModel.find();
    // res.render("shop", {products});
    res.send("shopping page");
});

module.exports = router;