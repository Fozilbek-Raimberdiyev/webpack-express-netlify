const path = require("path");
module.exports = {
  mode: process.env.NODE_ENV,
  entry: path.resolve(__dirname, ""),
  output : {
    path : path.resolve(__dirname, "dist"),
    filename : "server.js"
  }
};
