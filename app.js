const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync");
const Review = require("./models/reviews");
const listings = require("./Routes/listings");
const session=require("express-session");
const MongoStore=require("connect-mongo");
const passport=require("passport");
const LocalStrategy=require("passport-local");
const User=require("./models/user");
const Userroutes = require("./Routes/user");
require("dotenv").config();

const dbUrl = process.env.MONGO_URL;

// Setup
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

// DB

mongoose.connect(dbUrl)
  .then()
  .catch((err) => console.log("DB ERROR:", err));

/* ------------------------- EXPRESS SESSION ------------------------- */

const store = MongoStore.create({
    mongoUrl: dbUrl,
    ttl: 14 * 24 * 60 * 60,
});


store.on("error", () => {
  console.log("Error in Mongo Store");
});

const sessionOptions = {
  store,
  secret: "mysupersecretcode",
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 1000 * 60 * 60 * 24 * 3,
    maxAge: 1000 * 60 * 60 * 24 * 3,
    httpOnly: true,
  },
};

app.use(session(sessionOptions));


app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use((req, res, next) => {
    res.locals.currUser = req.user;
    next();
});



/* ------------------------- FIXED ROUTE ------------------------- */

// Make currentUser available in all templates
app.use((req, res, next) => {
    res.locals.currentUser = req.user;  // Passport sets req.user after login
    next();
});


app.use("/listings", listings);
app.use("/", Userroutes);

/* ------------------------- ERROR HANDLER ------------------------- */
app.use((err, req, res, next) => {
  console.error("ERROR →", err);
  res.status(500).send("<h1>Something went wrong</h1>");
});
/* ---------------------------------------------------------------- */

app.listen(8080);
