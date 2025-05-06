const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review =require("./reviews.js");

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  }, 
  description: String,
  image: {
      type: String,
      default: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      set: (v) =>
       v === ""
      ? "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
      :v,
  },
  price: Number,
  location: String,
  country: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  owner:{
    type: Schema.Types.ObjectId,
    ref:"User",
  },
});

listingSchema.post("findOneAndDelete", async (listing) => {
  if(listing){
  await Review.deleteMany({_id: {$in: listing.reviews}});
  }
 });

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
    