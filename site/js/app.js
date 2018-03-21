let angular = require('angular');
//var app = angular.module("myApp", []);

// require the 'sqlite3' package
var sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./db.sqlite');
