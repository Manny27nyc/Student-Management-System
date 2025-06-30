// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
const { corsPolicy } = require("./cors");
const { db } = require("./db");
const { env } = require("./env");

module.exports = {
  cors: corsPolicy,
  db,
  env,
};
