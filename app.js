const express = require("express");
require('dotenv').config();
const cookieParser = require("cookie-parser");
const path = require("path");
const db = require("./config/mongooseConnection");
const usersRouter = require("./routes/usersRouter");
const ownersRouter = require("./routes/ownersRouter");
const productsRouter = require("./routes/productsRouter");
const baseRouter = require("./routes/index");
const flash = require("connect-flash");
const expressSession = require("express-session");

const app = express();

app.use(
    expressSession({
        resave: false,
        saveUninitialized: false,
        secret: process.env.EXPRESS_SESSION_SECRET
    })
);

app.use(flash());

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

app.use("/", baseRouter);
app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);

app.listen(3000, () => {
    console.log("server is running");
})