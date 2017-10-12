# Free Moderns Template
- Free template with semantic-ui and jQuery

- npm init
- npm install --save express body-parser morgan md5 jsonwebtoken
- copy app.js
- create folder routers
- create folder controllers

function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me',{fields:'id,name'//yang di deklasikan di scope(html file) dan field ada di dokumen}, function(response) {
      console.log('Successful login for: ' + response.name);
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';



    });
