// Set up MySQL connection.
var mysql = require("mysql");


if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
  } else {
    connection = mysql.createConnection({
      host: '	tkck4yllxdrw0bhi.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
      user: '	dnbwomrxgyrvver2',
      password: 'Charmgizmo3!',
      database: 'burger2_db'
    });
  };

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Charmgizmo3!",
  database: "burger2_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
