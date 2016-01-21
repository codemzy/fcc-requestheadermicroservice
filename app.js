var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 8080));

app.get('/', function(req, res){
    var ip = req.headers["x-forwarded-for"];
    var langArr = req.headers["accept-language"].split(",");
    var lang = langArr[0];
    var re = /\((.*?)\)/;
    var soft = req.headers["user-agent"].match(re);
    res.json({ ipaddress: ip, language: lang, software: soft[1] });
});



app.listen(app.get('port'), function() {
  console.log('Express server listening on port', app.get('port'));
});