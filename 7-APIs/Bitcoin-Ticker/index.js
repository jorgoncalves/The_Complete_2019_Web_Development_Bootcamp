//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function (request, response) {
  response.sendFile(__dirname + '/index.html');
});
// atenção a ambiguidade 'response'
// app.post('/', function(resquest, res) {
//   // console.log(resquest.body.crypto);
//   var crypto = resquest.body.crypto;
//   var currency = resquest.body.fiat;
//
//   var baseURL = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/';
//   var finalURL = baseURL + crypto + currency;
//   request(finalURL, function(error, response, body) {
//     var data = JSON.parse(body);
//     var priceLast = data.last;
//     var currentData = data.display_timestamp;
//     var averageWeek = data.averages.week;
//
//     console.log('priceLast: ' + priceLast);
//     console.log('averageWeek: ' + averageWeek);
//
//     res.write('<p>The current date is ' + currentData + '</p>');
//     res.write('<h1>The price of ' + crypto + ' if ' + priceLast + ' ' + currency + ' </h1>');
//     res.send();
//   });
// });

app.post('/', function (req, res) {

  var crypto = req.body.crypto;
  var currency = req.body.fiat;
  var amount = req.body.amount;

  var options = {
    url: 'https://apiv2.bitcoinaverage.com/convert/global',
    method: 'GET',
    qs: {
      from: crypto,
      to: currency,
      amount: amount
    }
  };

  console.log(options);

  request(options, function (error, response, body) {

    var data = JSON.parse(body);
    var price = data.price;

    var currentData = data.time;

    res.write('<h1>Here is the conversion:</h1>');
    res.write('<h2>From ' + amount + ' ' + crypto + ' to ' + currency + '</h2>');
    res.write('<h2>' + price +  currencySymblo(currency) +' at ' + currentData + '</h2>');
    res.send();
  });
});

function currencySymblo(param) {
  switch (param) {
    case 'USD':
      return '$';
    case 'EUR':
      return '€';
    case 'GBP':
      return '£';
    default:
      break;
  }
}
app.listen(3000, function () {
  console.log('Server is running for Bitcoin Ticker');
});