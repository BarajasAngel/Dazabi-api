const mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
  host: "dazabiproyect.mysql.database.azure.com", 
  user: "Administrador@dazabiproyect", 
  password: "Babasonicos15", 
  database: "WASTE2MONEYDB", 
  port: 3306
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('db is connected');
  }
});

module.exports = mysqlConnection;
