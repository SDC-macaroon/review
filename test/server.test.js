/* eslint-disable */
const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
// const server = require('../server/index.js')

/*
  https://learn-2.galvanize.com/cohorts/1114/blocks/101/content_files/System%20Design%20Capstone/testing.md
  https://www.npmjs.com/package/supertest
  https://dev.to/nedsoft/testing-nodejs-express-api-with-jest-and-supertest-1km6
  https://scotch.io/tutorials/test-a-node-restful-api-with-mocha-and-chai
  https://jestjs.io/docs/en/puppeteer
*/

describe('GET /reviews/<productID>', () => {
  test('It should response the GET method', () => {
    request(app).get('/api/restaurant/1').then(async response => {
    await expect(response.statusCode).toBe(200);
    });
});

const app = express().listen(3000);
request(server).get('/reviews/2053').expect(200).end((err, res) => {
    if (err) throw err;
    else { res.send()}

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
