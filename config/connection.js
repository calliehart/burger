const mysql = require("mysql");
let connection;
const dotenv = require('dotenv').config();

if(process.env.JAWSDB_URL) {
  console.log("Jaws");
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  console.log("Not Jaws");
  console.log(dotenv);
  connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: process.env.SECRET_KEY,
  database: "burgers_db"
});
};

connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

  module.exports = connection;