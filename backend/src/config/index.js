/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
const { corsPolicy } = require("./cors");
const { db } = require("./db");
const { env } = require("./env");

module.exports = {
  cors: corsPolicy,
  db,
  env,
};
