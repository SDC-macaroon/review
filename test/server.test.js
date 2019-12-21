
/*
https://learn-2.galvanize.com/cohorts/1114/blocks/101/content_files/System%20Design%20Capstone/testing.md
https://www.npmjs.com/package/supertest
https://dev.to/nedsoft/testing-nodejs-express-api-with-jest-and-supertest-1km6
https://scotch.io/tutorials/test-a-node-restful-api-with-mocha-and-chai
https://jestjs.io/docs/en/puppeteer
*/
const mongoose = require('mongoose');
const request = require('supertest');

// const app = require('../server/index.js');

describe('GET /reviews/<productID>', () => {
  test('It should response the GET method', () => {
    request(app).get('/api/restaurant/1').then(async response => {
    await expect(response.statusCode).toBe(200);
    });
  });
});

module.exports = {
  mongoose,
  connect: () => {
    mongoose.Promise = Promise;
    mongoose.connect('mongodb://localhost/reviewDB2',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
  },
  disconnect: done => {
    mongoose.disconnect(done);
  },
};