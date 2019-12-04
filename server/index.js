const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(__dirname + '/../client/dist'))


const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port: ${port}`));