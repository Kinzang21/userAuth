const pgp = require('pg-promise')();
require('dotenv').config();


const db = pgp({
  host: process.env.DB_HOST,
  port: 5432,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  ssl: {
    rejectUnauthorized: false // For self-signed certificates, set to true for production with valid certs
  }
});


module.exports = db;
