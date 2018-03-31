var express = require('express');
var app = express();

var srvr = app.listen(3000, listening);

function listening(){
  console.log("listening ... ");

  app.use(express.static('site' + "/html"));
  app.use(express.static('site' + "/css"));
  app.use(express.static('site' + "/js"));

}
