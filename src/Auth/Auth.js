import auth0 from "auth0-js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { css } from "glamor";

toast.configure({
  hideProgressBar: true,
});

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: "akshay-gadkari.auth0.com",
    clientID: "fX2Ov3PrG67snp7CsUrUFcFE8RN5aglD",
    redirectUri: process.env.REACT_APP_FRONTEND_REDIRECT,
    responseType: "token id_token",
    scope: "openid profile",
  });

  signup(signupParams, successCb, errorCb) {
    console.log("signup called");
    console.log(this.auth0);
    this.auth0.signup(
      {
        ...signupParams,
        username: "",
        connection: "wellness-bet-backend",
        user_metadata: {
          plan: "silver",
        },
      },
      (err, signupResult) => {
        if (err) {
          console.log("SIGNUP ERROR", err);
          if (err.policy) {
            toast(`${err.policy}`, {
              className: css({
                background: "#3f51b5",
                color: "#f7f2e8",
              }),
            });
          } else {
            toast(`${err.description}`, {
              className: css({
                background: "#3f51b5",
                color: "#f7f2e8",
              }),
            });
          }
          // toast(`${err.description}`);
          if (errorCb) {
            errorCb();
          }
        } else {
          console.log("result", signupResult);
          toast("User Created", {
            className: css({
              background: "#3f51b5",
              color: "#f7f2e8",
            }),
          });
        }
        if (successCb) {
          console.log("success");
          successCb();
        }
      },
    );
  }

  login(loginParams, successCb, errorCb) {
    this.auth0.login(
      {
        ...loginParams,
        realm: "wellness-bet-backend",
        audience: "https://akshay-gadkari.auth0.com/api/v2/",
      },
      (err, authResult) => {
        if (err) {
          if (errorCb) {
            errorCb();
          }
          console.log("LOGIN ERROR", err);
          toast(`${err.description}`, {
            className: css({
              background: "#3f51b5",
              color: "#f7f2e8",
            }),
          });
          return err;
        }
        if (successCb) {
          successCb();
        }
        console.log(authResult);
      },
    );
  }

  getUserInfo(successCb, errorCb) {
    this.auth0.parseHash({ hash: window.location.hash }, (err, authResult) => {
      if (err) {
        return console.log(err);
      }
      console.log("AUTH", authResult);
      window.localStorage.setItem("access_token", authResult.accessToken);
      this.auth0.client.userInfo(authResult.accessToken, (err, user) => {
        if (err) {
          return console.log(err);
        }
        if (successCb) {
          successCb(user);
        }
        console.log("USER", user);
        return user;
      });
    });
  }
  returnUser(successCb) {
    this.auth0.client.userInfo(
      window.localStorage.access_token,
      (err, user) => {
        if (err) {
          window.localStorage.removeItem("access_token");
          return console.log(err);
        }
        if (successCb) {
          successCb(user);
        }
        console.log("USER", user);
        return user;
      },
    );
  }
}

// COMMENTS ARE FOR THE DATABASE ACCESS IN AUTH0 SETTINGS
/* CREATE USER
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
 *     //let arr = 'SELECT * FROM user';
 *     //const id = arr.length;
 *     const id = Math.floor(Math.random() * Math.floor(7085684324));
 *
 *     bcrypt.hash(user.password, 10, function(err, hash) {
 * 	if (err) return callback(err);
 *
 * 	const insert = {
 * 	    password: hash,
 * 	    email: user.email,
 * 	    id: id
 * 	};
 *
 * 	connection.query(query, insert, function(err, results) {
 * 	    if (err) return callback(err);
 * 	    if (results.length === 0) return callback();
 * 	    callback(null);
 * 	});
 *     });
 * }*/

/*  LOGIN
 * function login(email, password, callback) {
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
 *     const query = 'SELECT id, username, email, password FROM user WHERE email = ?';
 *
 *     connection.query(query, [ email ], function(err, results) {
 * 	if (err) return callback(err);
 * 	if (results.length === 0) return callback(new WrongUsernameOrPasswordError(email));
 * 	const user = results[0];
 *
 * 	bcrypt.compare(password, user.password, function(err, isValid) {
 * 	    if (err || !isValid) return callback(err || new WrongUsernameOrPasswordError(email));
 *
 * 	    callback(null, {
 * 		user_id: user.id.toString(),
 * 		username: user.username,
 * 		email: user.email
 * 	    });
 * 	});
 *     });
 * }*/
