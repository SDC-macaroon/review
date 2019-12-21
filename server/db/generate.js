/* eslint-disable */

const faker = require('faker');
const fs = require('fs');
const path = require('path');
const moment = require('moment');
const progress = require('cli-progress');
const colors = require('colors');

const total = 10000000;
const pathname = path.resolve(__dirname, 'products.csv');

const random = (min, max) =>
  (Math.floor(Math.random() * max) + min);

const writeHeader = async () => {
  const keys = 'productID,reviewID,rating,reviewTitle,reviewBody,reviewAuthor,reviewDate\n'
  const writeKeys = fs.writeFileSync(pathname, keys);
};

const writeItem = async review => {
  const writeReview = await fs.appendFileSync(pathname, review);
}

const createProduct = async productID => {
  let reviews = [];
  let reviewCount = random(1, 18);
  for (let reviewID = 0; reviewID < reviewCount; reviewID++) {
    const rating = Math.floor(Math.random() * 5) + 1;
    const reviewTitle = faker.lorem.words();
    const reviewBody = faker.lorem.paragraph();
    const reviewAuthor = faker.fake('{{name.findName}} {{name.suffix}}');
    const reviewDate = faker.date.between('2017-01-01', '2019-12-04');
    const review = [productID, reviewID, rating, reviewTitle, reviewBody, reviewAuthor, reviewDate].join(';');
    reviews.push(review);

  }
  return reviews;
}
const logStatus = status => {
  function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
  const duration = {
    minutes: moment.duration(status.endTime.diff(status.startTime)).minutes(),
    seconds: moment.duration(status.endTime.diff(status.startTime)).seconds()
  }
  console.log(`
    Start Time: ${status.startTime.format('h:mm:ss a')}
    End Time: ${status.endTime.format('h:mm:ss a')}
    Total Products: ${formatNumber(status.totalProducts)}
    Total reviews: ${formatNumber(status.totalReviews)}
    Duration: ${duration.minutes} Minutes ${duration.seconds} Seconds
  `)
}

const main = async () => {
  const bar = new progress.SingleBar({
    format: colors.brightBlue(' {bar}') + ' {percentage}% | Time Elapsed: {duration}s | {value}/{total}',
    barCompleteChar: '\u2588',
    barIncompleteChar: '\u2591',
    stream: process.stdout,
    barsize: 100,
  });
  bar.start(total, 0, {
    speed: "N/A"
  });
  const startTime = moment();
  let totalProducts = 0;
  let totalReviews = 0;
  await writeHeader();

  for (let i = 1; i <= total; i++) {
    const reviews = await createProduct(i);
    totalReviews += reviews.length;
    writeItem(reviews.join('\n').concat('\n'))
    bar.update(i);
    totalProducts++;
  }
  bar.stop()
  const endTime = moment();
  logStatus({ startTime, totalProducts, totalReviews, endTime })
}
main();
