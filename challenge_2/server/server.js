const express = require('express');
const app = express();
const port = 3000;
const title =  `Checkout Compiler`;
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./../database/db.js')


app.use('/', express.static(path.join(__dirname, '../client/public')))
app.use('/', bodyParser.json())


app.post('/submit', function(req, res){
  console.log('reqBODY',req.body)
  console.log('reqParams',req.params)

  console.log('reqQUERY',req.query.data)
  db.User.create(req.body, function(err, data){
    if (err) console.log('error', err);
  })
  res.send('success!')
})

app.listen(port, () => console.log(`${title} listening on port ${port}!`))
