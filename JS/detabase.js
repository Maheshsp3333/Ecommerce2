
const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Mahesh8336#",
  serverVersion: '8.0'

});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});



