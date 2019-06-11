import auth0 from "auth0-js";

export default class Auth {
    auth0 = new auth0.WebAuth({
	domain: "akshay-gadkari.auth0.com",
	clientID: "fX2Ov3PrG67snp7CsUrUFcFE8RN5aglD",
	redirectUri: process.env.REACT_APP_FRONTEND_REDIRECT,
	responseType: "token id_token",
	scope: "openid",
    });

    login() {
	this.auth0.authorize();
    }
}


/* 
 * function create(user, callback) {
 *     const mysql = require('mysql');
 *     const bcrypt = require('bcrypt');
 * 
 *     const connection = mysql.createConnection({
 * 	host: configuration.HOST,
 * 	user: configuration.USER,
 * 	password: configuration.PASSWORD,
 * 	database: configuration.DATABASE
 *     });
 * 
 *     connection.connect();
 * 
 *     const query = 'INSERT INTO user SET ?';
 * 
 *     bcrypt.hash(user.password, 10, function(err, hash) {
 * 	if (err) return callback(err);
 * 
 * 	const insert = {
 * 	    password: hash,
 * 	    email: user.email
 * 	};
 * 
 * 	connection.query(query, insert, function(err, results) {
 * 	    if (err) return callback(err);
 * 	    if (results.length === 0) return callback();
 * 	    callback(null);
 * 	});
 *     });
 * }*/
