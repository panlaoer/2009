var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'apl2009'
});
 
connection.connect();
 
 var sql = "select * from p_goods limit 10"
 console.log(sql)
connection.query(sql,function (error, results, fields) {
  console.log(error)
  console.log(results);
});
 
connection.end();