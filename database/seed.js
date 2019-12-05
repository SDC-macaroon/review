/* eslint-disable no-await-in-loop */
const faker = require('faker');
const mongoose = require('mongoose');
const Review = require('./Reviews.js');

const tenThousandReviews = [];

(async () => {
  for (let i = 0; i < 10000; i++) {
    await tenThousandReviews.push(
      {
        productID: Math.floor(Math.random() * (2100 - 2001 + 1)) + 2001,
        rating: Math.floor(Math.random() * 5) + 1, // random number between 1 and 5
        reviewTitle: faker.lorem.words(),
        reviewBody: faker.lorem.paragraph(),
        reviewAuthor: faker.fake('{{name.findName}} {{name.suffix}}'),
        reviewDate: faker.date.between('2017-01-01', '2019-12-04'),
      },
    );
  }
})();

(async () => {
  for (let i = 0; i < tenThousandReviews.length; i++) {
    await Review.create(tenThousandReviews[i])
      .catch(err => console.log(err));
  }
  mongoose.connection.close();
})();
