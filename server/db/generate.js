/* eslint-disable no-unused-vars */
/* eslint-disable no-multiple-empty-lines */
/*
  https://stackabuse.com/reading-and-writing-csv-files-with-node-js/

  generate 10M records and save them to CSV or XML file
*/
const faker = require('faker');
const fs = require('fs');
const path = require('path');

// eslint-disable-next-line func-names
(function () { // 10000000
  const writeProduct = fs.createWriteStream(path.resolve(__dirname, './products.csv'));
  for (let productID = 1; productID <= 10; productID++) {
    const reviewCount = Math.floor(Math.random() * 20) + 5;
    writeProduct.write('productID,reviewID,rating,reviewTitle,reviewBody,reviewAuthor,reviewDate\n');
    for (let reviewID = 0; reviewID < reviewCount; reviewID++) {
      const rating = Math.floor(Math.random() * 5) + 1;
      const reviewTitle = faker.lorem.words();
      const reviewBody = faker.lorem.paragraph();
      const reviewAuthor = faker.fake('{{name.findName}} {{name.suffix}}');
      const reviewDate = faker.date.between('2017-01-01', '2019-12-04');

      let review = [
        productID,
        reviewID,
        rating,
        reviewTitle,
        reviewBody,
        reviewAuthor,
        reviewDate,
      ].join(';');
      console.log(review);
      review += '\n';
      writeProduct.write(review);
    }
  }
}());





/*
const faker = require('faker');
const mongoose = require('mongoose');
const { ProductModel, ReviewModel } = require('./Reviews.js');

mongoose.connection.collections.products.drop().catch(() => 1 + 1);

(async () => {
  for (let productID = 2001; productID <= 2100; productID++) {
    const product = new ProductModel({ productID, reviews: [] });
    const reviewCount = Math.floor(Math.random() * 80) + 10;

    for (let i = 0; i < reviewCount; i++) {
      const review = new ReviewModel({
        reviewID: i,
        rating: Math.floor(Math.random() * 5) + 1,
        reviewTitle: faker.lorem.words(),
        reviewBody: faker.lorem.paragraph(),
        reviewAuthor: faker.fake('{{name.findName}} {{name.suffix}}'),
        reviewDate: faker.date.between('2017-01-01', '2019-12-04'),
      });
      product.reviews.push(review);
    }
    await product.save().catch(err => console.log(err));
  }
  mongoose.connection.close();
})();
*/
