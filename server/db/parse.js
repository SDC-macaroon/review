/*eslint-disable*/
const readline = require('readline');
const fs = require('fs');

// create instance of readline
// each instance is associated with single input stream
const rl = readline.createInterface({
    input: fs.createReadStream('./data/products.csv')
});

let lineNo = 0;
var dataTitle;
// event is emitted after each line
rl.on('line', function(line) {
    // console.log(`LINE: ${lineNo} --> ${line}`);
    const data = line.split(';');
    let review = {};
    if(lineNo === 0) {
      dataTitle = data;
    } else {
      dataTitle.forEach((title, i) => review[title] = data[i])
      console.log(review)
    }
    lineNo++;
});

// end
rl.on('close', function(line) {
    console.log('Total lines: ' + lineNo);
});

