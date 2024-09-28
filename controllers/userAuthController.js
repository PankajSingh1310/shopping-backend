const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {generateToken} = require("../utils/generateToken");

module.exports.registerUser = async (req, res) => {
  try {
    const { fullname, email, password, contact } = req.body;

    const user = await userModel.findOne({ email });
    if (user) return res.status(409).send("user already registed");

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, async (err, hash) => {
        if (err) return res.send(err.message);

        const createdUser = await userModel.create({
          fullname,
          email,
          password: hash,
          contact,
        });

        const token = generateToken(createdUser);
        res.cookie("token", token);
        res.status(201).send(createdUser);
      });
    });
  } catch (err) {
    res.send(err.message);
  }
};

module.exports.loginUser = async (req, res) => {

  try{
    const {email, password} = req.body;
    const user = await userModel.findOne({email});
    if(!user) return res.send("something went wrong");

    bcrypt.compare(password, user.password, (err, result) => {

      if(result){
        let token = generateToken(user);
        res.cookie("token", token);
        res.send("you can login");
      }
    })
  }catch(err){
    console.log(err.message);
  }
}
