
const addition = require('./lib/addition.js');

console.log("THERE IS MY SUM", addition(2, 3));


require('dotenv').config();
const express = require('express');

const app = express();

app.get('/addition', (request, response) => {
  try { 
    let { number1, number2 } = request.query;
    let sum = addition(parseInt(number1), parseInt(number2));
    response.status(200).json({value: sum});
  } catch(e) {
    response.status(400).send('I need some numbers :(');
  }
});


module.exports = app;