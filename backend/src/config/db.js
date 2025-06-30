// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
const { Pool } = require("pg");
const { env } = require("./env");

const db = new Pool({
  connectionString: env.DATABASE_URL,
});

module.exports = { db };
