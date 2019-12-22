/* eslint-disable */
const express = require('express');
const faker = require('faker');
const _ = require('lodash');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db/og-mongo/queries.js');

const port = process.env.PORT || 3002;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/product/:productID', express.static(`${__dirname}/../public`));

/************************************
***             REVIEWS           ***
*************************************/
/*
  Create One Product Review
*/
app.post('/reviews/:productID', async (req, res) => {
  const reviews = await db.reviews.create(req.params, req.body);
  res.status(200).send(reviews);
});

/*
  Read All Reviews for a Product
*/
app.get('/reviews/:productID', async (req, res) => {
  const product = await db.reviews.read(req.params);
  res.status(200).send(product.reviews);
});

/************************************
***             REVIEW            ***
*************************************/

/*
  Create One Product Review
*/
app.post('/review/:productID', async (req, res) => {
  const reviews = await db.reviews.create(req.params, req.body);
  res.status(200).send(reviews);
});

/*
  Read One Product Review
*/
app.get('/review/:productID/:reviewID', async (req, res) => {
  const review = await db.review.read(req.params);
  res.status(200).send(review);
});

/*
  Update One Product Review
*/
app.put('/review/:productID/:reviewID', async (req, res) => {
  const reviews = await db.review.update(req.params, req.body);
  res.status(200).send(reviews);
});

/*
  TODO: Delete One Product Review
*/
app.delete('/review/:productID/:reviewID', async (req, res) => {
  const reviews = await db.review.delete(req.params);
  res.status(200).send(reviews);
});

/************************************
* TODO:        PRODUCTS           ***
*************************************/

/*
TODO:  Create One Product
*/
app.post('/products/:productID', async (req, res) => {
  // CREATE ONE PRODUCT
    // ACCEPTS PRODUCT ID
});

/*
TODO:  Read One Product
*/
app.get('/products/:productID', async (req, res) => {
  //  READ ONE PRODUCT
    //  ACCEPTS PRODUCT ID
});

/*
TODO:  Update One Product
*/
app.put('/products/:productID', async (req, res) => {
  //  UPDATE ONE PRODUCT
    //  ACCEPTS PRODUCT ID
});

/*
TODO:  Delete One Product
*/
app.delete('/products/:productID', async (req, res) => {
  //  DELETE ONE PRODUCT
    //  ACCEPTS PRODUCT ID
});


/************************************
* TODO:        OPTIONS            ***
*************************************/
/* Delete One Product Review */
app.options('/reviews', async (req, res) => {
});


app.listen(port, () => console.log(`Listening on port: ${port}`));
module.exports = app;
