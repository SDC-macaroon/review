const express = require('express');
const db = require('./index.js'); // eslint-disable-line
const { fetch } = require('../database/Reviews.js');
const { productModel, reviewModel } = require('../database/Reviews.js'); // eslint-disable-line

const app = express();
app.use('/product/:productID', express.static(`${__dirname}/../public`));

app.get('/reviews/:productID', async (req, res) => {
  const productIdArray = await fetch(req.params.productID);
  res.status(200).send(productIdArray[0].reviews);
});

// Create
app.post('/reviews/:productID', async (req, res) => {
  const productIdArray = await fetch(req.params.productID);
  res.status(200).send(productIdArray[0].reviews);
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
