const mongoose = require("mongoose");
const reviwes = require("./reviews");
const Schema = mongoose.Schema;
const review=require("./reviews");

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
        minlength: 2,
    },
    image:{
            type: String,
            required: true,
            trim: true,
            default:"https://ramadadarjeeling.com/wp-content/uploads/2022/09/Deluxe-Room-booking-in-Darjeeling-Hotel-Booking.jpg",
            set : (v)=> v==="" ?"https://ramadadarjeeling.com/wp-content/uploads/2022/09/Deluxe-Room-booking-in-Darjeeling-Hotel-Booking.jpg" : v,
        },
    price: {
        type: Number,
        required: true,
        min: 100,
    },
    location: {
        type: String,
        required: true,
        trim: true,
    },

    country: {
        type: String,
        required: true,
        trim: true,
    },
    reviews:[
        {
            type:Schema.Types.ObjectId,
            ref:"Review",
        }
    ],
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User",
    }
});

listingSchema.post("findOneAndDelete",async(listing)=>{
    if(listing){
    await review.deleteMany({_id:{$in:listing.reviews}});
    }
});


const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
