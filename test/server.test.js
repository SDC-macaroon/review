// eslint-disable-next-line no-unused-vars
const request = require('supertest');
const express = require('express');
// const server = require('../server/index.js')
/*
https://learn-2.galvanize.com/cohorts/1114/blocks/101/content_files/System%20Design%20Capstone/testing.md
https://www.npmjs.com/package/supertest
https://dev.to/nedsoft/testing-nodejs-express-api-with-jest-and-supertest-1km6
https://scotch.io/tutorials/test-a-node-restful-api-with-mocha-and-chai
https://jestjs.io/docs/en/puppeteer
*/
const app = express().listen(3000);
request(server).get('/reviews/2053').expect(200).end((err, res) => {
    if (err) throw err;
    else { res.send()}
  });

