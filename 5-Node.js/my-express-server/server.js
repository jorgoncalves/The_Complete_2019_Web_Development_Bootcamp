//jshint esversion:6
const express = require('express');

const app = express();

//primeiro parametro especifica o local de entrada, neste caso o home, o segundo é uma função callback
//quando recebemos um pedido que pede o home("/") respondemos com o callback
app.get('/', function(request, response) {
  //metodo de envio de resposta ao pedido
  response.send('<h1>Hello world!</h1><br>' + request);
});

app.get('/contact', function(req, res) {
  res.send('Contact me at: jorge@gmail.com');
});

app.get('/about', function(req, res) {
  res.send('Hello, im Jorge Gonçalves currently studying express!!');
});

app.get('/hobbies', function(req, res) {
  res.send('<ul><li>Code</li><li>Gaming</li><li>Exercice</li></ul>');
});
//fica a escuta de pedidos na porta http 3000
app.listen(3000, function() {
  console.log('Server started on port 3000.');
});