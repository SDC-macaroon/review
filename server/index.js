const express = require('express');
const faker = require('faker');

const { ProductModel, ReviewModel } = require('../database/Reviews.js'); // eslint-disable-line

const app = express();
app.use('/product/:productID', express.static(`${__dirname}/../public`));

app.get('/reviews/:productID', async (req, res) => {
  const product = await ProductModel
    .find({ productID: req.params.productID })
    .exec();

  res.status(200).send(product[0].reviews);
});




// Create
app.post('/reviews/:productID', async (req, res) => {
  const { productID } = req.params;
  let reviewID = await ProductModel
    .find({ productID });
  reviewID = reviewID[0].reviews.length;
  console.log(reviewID);

  const review = new ReviewModel({
    reviewID,
    rating: 4,
    reviewTitle: 'THE BEST REVIEW',
    reviewBody: faker.lorem.paragraph(),
    reviewAuthor: 'Peter Barnum',
    reviewDate: new Date(),
  });

  const product = await ProductModel
    .findOne({ productID });
  product.reviews.push(review);
  await product.save();

  res.status(200).send(product);
});

/*
// Update
app.put('/reviews/:productID', async (req, res) => {
  const productIdArray = await fetch(req.params.productID);
  res.status(200).send(productIdArray[0].reviews);
});

// Delete
app.delete('/reviews/:productID:reviewID', async (req, res) => {
  const productIdArray = await fetch(req.params.productID);
  res.status(200).send(productIdArray[0].reviews);
});

*/
const port = process.env.PORT || 3002;

app.listen(port, () => console.log(`Listening on port: ${port}`));
