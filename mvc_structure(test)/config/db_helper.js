/*
var mysql = require('mysql');

var pool  = mysql.createPool({
    connectionLimit : 10,
    host: '192.168.100.160',
    user: 'root',
    password : '',
    port : 3306,
    database:'student',
    multipleStatements:true
});

var getConnection = function(callback) {
    pool.getConnection(function(err, connection) {
        callback(err, connection);
    });
};

exports.getConnection = getConnection;
*/


var mysql      = require('mysql');
var connection = mysql.createConnection({
    connectionLimit : 10,
	host: 'localhost',
	user: 'root',
	password : 'root',
	port : 3306,
	database:'student',
	dateStrings: 'date',
	multipleStatements:true
});

connection.connect(function(err) {
    if (err) {
    	console.error('Error connecting: ' + err.stack);
    	return;
	}
	console.log('Connection established');
});

module.exports = connection;