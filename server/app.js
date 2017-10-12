var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
//var multer  =   require('multer');

//var routerGambars = require('./routers/gambar');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(morgan('dev'));

var path = require('path')
app.use('/static',express.static(__dirname + '/client/public'));

// halaman index
app.get('/',function(req,res){
      res.sendFile(__dirname + "folder/file_html.html");
});

//app.use('/gambars', routerGambars);
//app.use('/transactions', routerTransaction);
//app.use('/customers', routerCustomer);

app.listen(process.env.PORT||3000,()=>{
  console.log('Listening Port 3000')
});
