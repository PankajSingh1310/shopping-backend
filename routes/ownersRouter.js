const express = require("express");
const router = express.Router();
const ownerModel = require("../models/ownerModel");

router.get("/", (req, res) => {
    res.send("router is working");
})

router.post("/create", async (req, res) => {
    const owners = await ownerModel.find();
    if(owners.length > 0) return res.status(503).send("you do not have permission to create owner accout");

    const {fullname, email, password} = req.body;

    const createdOwner = await ownerModel.create({
        fullname,
        email,
        password
    })

    res.status(201).send(createdOwner);
})

router.get("/admin", (req, res) => {
    // const success = req.flash("success");
    // res.render("createProducts", {success});
    res.send("admin panel");
})

module.exports = router;