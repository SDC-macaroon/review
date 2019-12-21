/* eslint-disable func-names */
const axios = require('axios');
const faker = require('faker');


const url = 'http://localhost:3002';

(async function () {
  const review = {
    rating: 4,
    reviewTitle: 'THE BEST REVIEW again',
    reviewBody: faker.lorem.paragraph(),
    reviewAuthor: 'Peter Barnum4',
    reviewDate: new Date(),
  };

  // await axios.get(`${url}/reviews/2053`, review)
  //   .then(({ data }) => console.log(data));
  // await axios.post(`${url}/reviews/2053`, review)
  //   .then(() => console.log('PASS'));
  // await axios.post(`${url}/review/2053`, review)
  //   .then(() => console.log('PASS'));
  // await axios.get(`${url}/review/2053/3`, review)
  //   .then(({ data }) => console.log(data));
  // await axios.put(`${url}/review/2053/26`, review)
  // .then(({ data }) => console.log(data));
  await axios.delete(`${url}/review/2053/11`)
    .then(({ data }) => console.log(data));
}());
