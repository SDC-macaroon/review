const express = require('express');
const faker = require('faker');
const _ = require('lodash');
const { ProductModel, ReviewModel } = require('../database/Reviews.js'); // eslint-disable-line

const app = express();
app.use('/product/:productID', express.static(`${__dirname}/../public`));
/*
  * Finished *
    Reviews
      * Create One
      * Read All

  !Unfinished
    Reviews
      ! Create one
      ! Update one
      ! Delete One

    Products
      !  Create One
      !  Read One
      !  Update One
      !  Delete One
*/

/* Fetch All Reviews for a Product */
app.get('/reviews/:productID', async (req, res) => {
  const product = await ProductModel
    .find({ productID: req.params.productID })
    .exec();

  res.status(200).send(product[0].reviews);
});


/* Create One Product Review */
// ! Still needs to accept user review
app.post('/reviews/:productID', async (req, res) => {
  const { productID } = req.params;
  let reviews = await ProductModel
    .find({ productID });

  reviews = reviews[0].reviews;
  const reviewID = reviews.length;

  const review = new ReviewModel({
    reviewID,
    rating: 4,
    reviewTitle: 'THE BEST REVIEW',
    reviewBody: faker.lorem.paragraph(),
    reviewAuthor: 'Peter Barnum2',
    reviewDate: new Date(),
  });
  console.log('rev auth --> ', review.reviewAuthor);

  // eslint-disable-next-line consistent-return
  const invalid = _.find(reviews, ({ reviewAuthor }) => {
    console.log(reviewAuthor);
    if (reviewAuthor === review.reviewAuthor) {
      return true;
    }
  });
  if (invalid) {
    res.status(405).send(reviews);
  } else {
    const product = await ProductModel
      .findOne({ productID });
    product.reviews.push(review);
    await product.save();
    res.status(200).send(product);
  }
});

// TODO *********************

// TODO Products
/* Create One Product */
// eslint-disable-next-line no-unused-vars
app.post('/reviews/:productID', async (req, res) => {
  // Accepts data from request
});

/* Fetch One Product */
// eslint-disable-next-line no-unused-vars
app.get('/reviews/:productID', async (req, res) => {
  // fetch entire product
});

/* Update One Product */
// eslint-disable-next-line no-unused-vars
app.put('/reviews/:productID', async (req, res) => {
  // Update one product
});

/* Delete One Product  */
// eslint-disable-next-line no-unused-vars
app.delete('/reviews/:productID', async (req, res) => {
  // Delete one product
});

// TODO Reviews
/* Fetch One Product Review */
// eslint-disable-next-line no-unused-vars
app.get('/reviews/:productID:reviewID', async (req, res) => {
});

/* Update One Product Review */
// eslint-disable-next-line no-unused-vars
app.put('/reviews/:productID:reviewID', async (req, res) => {
  // Accepts updated parameters
});


/* Delete One Product Review */
// eslint-disable-next-line no-unused-vars
app.delete('/reviews/:productID:reviewID', async (req, res) => {
});

// OPTIONS
/* Delete One Product Review */
// eslint-disable-next-line no-unused-vars
app.options('/reviews', async (req, res) => {
});

const port = process.env.PORT || 3002;

app.listen(port, () => console.log(`Listening on port: ${port}`));
