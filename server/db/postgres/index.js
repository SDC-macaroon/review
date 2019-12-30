/*
  https://node-postgres.com/
  https://blog.logrocket.com/setting-up-a-restful-api-with-node-js-and-postgresql-d96d6fc892d8/
  port: 5432

  username: 'dbadmin'
*/
const { Pool } = require('pg');

const pool = new Pool();
module.exports = {
  query: (text, params, callback) => pool.query(text, params, callback),
};
