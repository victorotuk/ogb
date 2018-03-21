//Step 1 - import express
var express = require('express');
//


//use it to create a local connection
const app = express();

var server = app.listen(3000);

console.log('listening...');

app.use(express.static('./site/html/index.html'));
