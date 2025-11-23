const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/user");

// ================= SIGNUP =================
router.get("/signup", (req, res) => {
    res.render("users/signup");
});

router.post("/signup", async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        const newUser = new User({ email, username });
        const registeredUser = await User.register(newUser, password);
        //console.log("User registered:", registeredUser);

        req.login(registeredUser, (err) => {
            if (err) return next(err);
            res.redirect("/listings");
        });

    } catch (err) {
        console.log("Signup Error:", err.message);
        res.redirect("/signup");
    }
});

// ================= LOGIN =================
router.get("/login", (req, res) => {
    res.render("users/login");  // create login.ejs
});
router.post("/login",
    passport.authenticate("local", {
        failureRedirect: "/login",
        failureFlash: true   // optional, requires flash if used
    }),
    (req, res) => {
        res.redirect("/listings");
    }
);

// ================= LOGOUT =================
router.get("/logout", (req, res) => {
    req.logout((err) => {
        if(err) return next(err);
        res.redirect("/listings");
    });
});

module.exports = router;
