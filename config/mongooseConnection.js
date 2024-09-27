const mongoose = require("mongoose");

mongoose.connect(`${process.env.MONGO_URI}/shopping`)
.then(() => {
    console.log("Database connected successfully");
})
.catch((err) => {
    console.log(err);
})

module.exports = mongoose.connection;