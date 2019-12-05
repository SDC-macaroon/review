const mongoose = require('mongoose');
const db = require('./index.js');

mongoose.Promise = global.Promise;

const reviewSchema = new mongoose.Schema({
  productID: Number,
  rating: Number,
  reviewTitle: String,
  reviewBody: String,
  reviewAuthor: String,
  reviewDate: String,
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
