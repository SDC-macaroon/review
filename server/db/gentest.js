/*eslint-disable*/
const readline = require('readline');
const fs = require('fs');

// create instance of readline
// each instance is associated with single input stream
const rl = readline.createInterface({
    input: fs.createReadStream('./data/products.csv')
});

var lineNo = 0
var properties = '';
var products = 0;
var reviews = 0;
var currentProduct = null;

// event is emitted after each line
rl.on('line', function(line) {
  if(lineNo === 0) {
    properties = line.split(';');
  } else {
    const [productID, reviewID] = line.split(';');
    if(productID !== currentProduct) {
      products++;
      currentProduct = productID;
    }
    reviews++;
  }
    lineNo++;
    if(lineNo % 54321 === 1) {
      console.clear();
      console.log(`
        Products: ${products}
        Reviews: ${reviews}
      `)
    }
});

// end
rl.on('close', (line) => {
  console.log(`
    Properties: ${properties}
    Products: ${products.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
    Reviews: ${reviews.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
  `)

});