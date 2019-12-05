/* eslint-disable no-await-in-loop */
/* eslint-disable new-cap */
const faker = require('faker');
const mongoose = require('mongoose');
const { productModel, reviewModel } = require('./Reviews.js');

(async () => {
  for (let productID = 2001; productID <= 2100; productID++) {
    const product = new productModel({ productID, reviews: [] });
    const reviewCount = Math.floor(Math.random() * 20) + 1;

    for (let i = 0; i < reviewCount; i++) {
      const review = new reviewModel({
        rating: Math.floor(Math.random() * 5) + 1, // random number between 1 and 5
        reviewTitle: faker.lorem.words(),
        reviewBody: faker.lorem.paragraph(),
        reviewAuthor: faker.fake('{{name.findName}} {{name.suffix}}'),
        reviewDate: faker.date.between('2017-01-01', '2019-12-04'),
      });
      product.reviews.push(review);
    }
    await product.save()
      .catch(err => console.log(err));
  }
  mongoose.connection.close();
})();
