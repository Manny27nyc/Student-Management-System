/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
const { app } = require("./app.js");
const { env } = require("./config");

const PORT = env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);                                                                                                                                                
});
