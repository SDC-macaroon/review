const mongoose = require('mongoose');
const db = require('./index.js');

mongoose.Promise = global.Promise;

const reviewSchema = new mongoose.Schema({
  rating: Number,
  reviewTitle: String,
  reviewBody: String,
  reviewAuthor: String,
  reviewDate: String,
});

const productSchema = new mongoose.Schema({
  productID: Number,
  reviews: [reviewSchema],
});

const Review = mongoose.model('Review', productSchema);

module.exports = Review;
