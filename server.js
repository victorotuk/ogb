//Step 1 - import express
var express = require('express');
//


//use it to create a local connection
var app = express();

app.listen(3000);

app.use(express.static('./site'));

console.log('listening...');
