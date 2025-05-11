const Listing = require('../models/listing');
const Review = require('../models/review');
module.exports.createReview = async(req , res)=>{
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id ;
    listing.reviews.push(newReview);
    console.log(newReview);
    await newReview.save();
    await listing.save();
    res.redirect(`/listings/${listing._id}`);
  }

module.exports.destroyReview = async(req , res)=>{
    let id = req.params.id;
    let reviewId = req.params.reviewId;
    let res1 =  await Listing.findByIdAndUpdate(id , {$pull:{reviews:reviewId}});
    let res2 = await Review.findByIdAndDelete(reviewId);
    res.redirect(`/listings/${id}`);
  };