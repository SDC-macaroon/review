const bodyParser = require('body-parser');
const express = require('express');
const { fetch } = require('../database/Reviews.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/product/:productID', express.static(`${__dirname}/../client/dist`));

app.get('/reviews/:productID', async (req, res) => {
  const productIdArray = await fetch(req.params.productID);
  res.status(200).send(productIdArray[0].reviews);
});


const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port: ${port}`));
