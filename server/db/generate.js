/* eslint-disable */
const fs = require('fs');
const { lorem, fake, date } = require('faker');
const moment = require('moment');
const path = require('path');

const TOTAL = 10000000; // 10M
const BATCH_SIZE = 1000000; // 1M
const THEN = moment();


const generate = (start) => {
  const random = (min, max) => (Math.floor(Math.random() * max) + min);
  const target = start+BATCH_SIZE +1;
  for(let productID = start+1; productID < target; productID++) {
    const fd = fs.openSync(path.join(__dirname, 'products.csv'), 'a')
    // let reviews = '';
    for (let reviewID = 0; reviewID < random(1, 12); reviewID++) {
      const review = `${productID};${reviewID};${random(1,5)};${lorem.words()};${lorem.paragraph()};${fake('{{name.findName}} {{name.suffix}}')};${date.between('2017-01-01', '2019-12-04')}\n`;
      // reviews += review;
      fs.writeSync(fd, review)
    }
    // reviews = null;
    fs.closeSync(fd)
  }
  console.log(`${start+1} --> ${target-1}`);
}
function formatDuration(then){
  const pad = (num) => num.toString().padStart(2,0);
  let now = moment()
  let dur = moment.duration(now.diff(then))
  return `${pad(dur.hours())}:${pad(dur.minutes())}:${pad(dur.seconds())}`
}


console.clear()
console.log('Started Generating\nCompleted:')

fs.writeFileSync(path.join(__dirname, 'products.csv'), 'productID,reviewID,rating,reviewTitle,reviewBody,reviewAuthor,reviewDate\n');
generate(0);
generate(BATCH_SIZE);
generate(BATCH_SIZE*2);
generate(BATCH_SIZE*3);
generate(BATCH_SIZE*4);
generate(BATCH_SIZE*5);
generate(BATCH_SIZE*6);
generate(BATCH_SIZE*7);
generate(BATCH_SIZE*8);
generate(BATCH_SIZE*9);

console.log(`
Finished Generating
${formatDuration(THEN)}
`)




