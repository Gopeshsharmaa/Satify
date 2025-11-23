const express = require("express");
const router = express.Router();     // FIXED
const wrapAsync = require("../utils/wrapAsync");
const Review = require("../models/reviews");
const Listing = require("../models/listing");
const { isLoggedIn } = require("../middlewares");


// INDEX
router.get("/", wrapAsync(async (req, res) => {
    const alllistings = await Listing.find({});
    res.render("listings/index", { alllistings });
}));

//NEW 
router.get("/new", isLoggedIn, (req, res) => {
    res.render("listings/new");
});


// CREATE
router.post("/", isLoggedIn, wrapAsync(async (req, res) => {
    const listing = new Listing(req.body.Listing);
    listing.owner = req.user._id;   // <-- THIS IS THE FIX
    await listing.save();
    res.redirect("/listings");
}));


// SHOW
router.get("/:id", wrapAsync(async (req, res) => {

    const listing = await Listing.findById(req.params.id)
        .populate("owner")               // populate owner
        .populate({
            path: "reviews",
            populate: { path: "author" } // populate review authors
        });

    if (!listing) {
        req.flash("error", "Listing not found");
        return res.redirect("/listings");
    }

    res.render("listings/show", { listing });
}));


// EDIT
router.get("/:id/edit", isLoggedIn ,wrapAsync(async(req, res) => {
    const listing = await Listing.findById(req.params.id);
    if (!listing) throw new Error("Listing not found");
    res.render("listings/edit", { listing });
}));

// UPDATE
router.put("/:id",isLoggedIn, wrapAsync(async (req, res) => {
    await Listing.findByIdAndUpdate(req.params.id, req.body.Listing);
    res.redirect(`/listings/${req.params.id}`);
}));

// DELETE LISTING
router.delete("/:id",isLoggedIn, wrapAsync(async (req, res) => {
    await Listing.findByIdAndDelete(req.params.id);
    res.redirect("/listings");
}));

// ADD REVIEW
router.post("/:id/reviews", isLoggedIn, wrapAsync(async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    if (!listing) return res.send("Listing not found");

    let newreview = new Review(req.body.review);
    newreview.author = req.user._id;   // ⭐ ADD THIS

    listing.reviews.push(newreview);

    await newreview.save();
    await listing.save();

    res.redirect(`/listings/${req.params.id}`);
}));


// DELETE REVIEW
router.delete("/:id/reviews/:reviewid", wrapAsync(async (req, res) => {
    let { id, reviewid } = req.params;

    // Remove review ID from array
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewid } });

    // Delete review document
    await Review.findByIdAndDelete(reviewid);

    res.redirect(`/listings/${id}`);
}));

module.exports = router;
