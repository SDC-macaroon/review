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
  read: async ({ productID }) => {
    const results = await ProductModel
      .find({ productID })
      .exec();
    return results[0];
  },
  create: async ({ productID }, data) => {
    const results = await reviews.read({ productID });
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
  create: (...args) => reviews.create(...args),
  read: async ({ productID, reviewID }) => {
    const product = await ProductModel.find({ productID });
    let data = product[0].reviews;
    data = data[reviewID];
    return data;
  },
  update: async ({ productID, reviewID }, data) => {
    const product = await ProductModel
      .findOne({ productID });
    const newData = { reviewID, ...data };
    product.reviews[reviewID] = newData;
    await product.save();
    return product;
  },
  delete: async ({ productID, reviewID }) => {
    const product = await ProductModel
      .findOne({ productID });

    const index = await _.findIndex(product.reviews, rev => rev.reviewID !== reviewID);
    await product.reviews.splice(index, 1);

    await product.save();
    return product;
  },
};

const product = {
  create: () => {},
  read: () => {},
  update: () => {},
  delete: () => {},
};

module.exports = { reviews, review, product };
