const express = require("express");
const router = express.Router();
const upload = require("../config/multerConfig");
const productModel = require("../models/productModel");

router.get("/", (req, res) => {
    res.send("product router is working");
})

router.post("/create", upload.single("image"), async (req, res) => {

    try{
        const {name, price, discount, bgcolor, panelcolor, textcolor} = req.body;

        const product = await productModel.create({
            image: req.file.buffer,
            name,
            price,
            discount,
            bgcolor,
            panelcolor,
            textcolor
        })

        req.flash("success", "product created successfully");
        res.redirect("/owners/admin");
    }catch(err){
        res.send(err.message);
    }
})


module.exports = router;