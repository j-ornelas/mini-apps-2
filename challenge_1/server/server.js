const express = require('express');
const app = express();
const port = 4200;
const title =  `CryptoChart`;
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');

app.use('/', express.static(path.join(__dirname, '../client/public')));
app.use('/date', express.static(path.join(__dirname, '../client/public')));

app.get('/info', function(req, res){
  console.log(req.query.url)
  axios.get(req.query.url)
    .then(function(response){
      res.send(response.data.bpi)
    })
    .catch(function(error){
      console.log(error)
    })
});

// app.get('/date', function(req, res){
//   console.log(req.body)
//   res.send(path.join(__dirname, '../client/public/index.html'))
// })



app.listen(port, () => console.log(`${title} listening on port ${port}!`))
