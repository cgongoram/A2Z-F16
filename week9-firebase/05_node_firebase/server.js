// A2Z F16
// Daniel Shiffman
// http://shiffman.net/a2z
// https://github.com/shiffman/A2Z-F16

// // Using express: http://expressjs.com/
// var express = require('express');
// // Create the app
// var app = express();
//
// // Set up the server
// var server = app.listen(3000, listen);
//
// // This call back just tells us that the server has started
// function listen() {
//   var host = server.address().address;
//   var port = server.address().port;
//   console.log('Example app listening at http://' + host + ':' + port);
// }

 var firebase = require('firebase');

var config = {
  apiKey: "AIzaSyC9eOIio496mGiHrBXokNppkCQCWZZa69Q",
  authDomain: "fir-email-login-8ca57.firebaseapp.com",
  databaseURL: "https://fir-email-login-8ca57.firebaseio.com",
  storageBucket: "fir-email-login-8ca57",
  messagingSenderId: "41996600250"
};





firebase.initializeApp(config);
database = firebase.database();
var ref = database.ref("fruits");

ref.on("value", gotData, errData);

function errData(error) {
  console.log("Something went wrong.");
  console.log(error);
}

// The data comes back as an object
function gotData(data) {
  var fruits = data.val();
  // Grab all the keys to iterate over the object
  var keys = Object.keys(fruits);
  // Loop through array
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var fruit = fruits[key];
    console.log(fruit.fruit, fruit.total, key);
  }
}
