const mongoose = require('mongoose');
/* DO NOT REMOVE */
const db = require('./index.js'); // eslint-disable-line

mongoose.Promise = global.Promise;

const ReviewSchema = new mongoose.Schema({
  reviewID: { type: Number, unique: true },
  rating: Number,
  reviewTitle: String,
  reviewBody: String,
  reviewAuthor: String,
  reviewDate: Date,
});

const ProductSchema = new mongoose.Schema({
  productID: { type: Number, unique: true },
  reviews: [ReviewSchema],
});

const ProductModel = mongoose.model('Product', ProductSchema);


module.exports.ReviewModel = mongoose.model('Review', ReviewSchema);
module.exports.ProductModel = ProductModel;
