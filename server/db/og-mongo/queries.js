const _ = require('lodash');
const { ProductModel, ReviewModel } = require('./schemas.js');
// eslint-disable-next-line no-unused-vars
const { db } = require('./index.js');

const validAuthor = (reviews, author) => {
  let invalid = false;
  _.find(reviews, ({ reviewAuthor }) => {
    if (reviewAuthor === author) {
      invalid = true;
    }
  });
  return invalid;
};
const reviews = {
  read: async productID => {
    const results = await ProductModel.find({ productID }).exec();
    return results[0];
  },
  create: async (productID, data) => {
    const results = await reviews.read(productID);

    const review = { reviewID: results.reviews.length, ...data };
    const reviewModel = new ReviewModel(review);

    const invalid = await validAuthor(results.reviews, review.reviewAuthor);
    if (invalid) {
      return results;
    }
    const product = await ProductModel
      .findOne({ productID });
    product.reviews.push(reviewModel);
    await product.save();

    return product;
  },
};

const review = {
  create: () => {},
  read: () => {},
  update: () => {},
  delete: () => {},
};

const product = {
  create: () => {},
  read: () => {},
  update: () => {},
  delete: () => {},
};

module.exports = { reviews, review, product };
