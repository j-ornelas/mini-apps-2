const express = require('express');
const app = express();
const port = 4200;
const title =  `CryptoChart`;
const path = require('path');
const bodyParser = require('body-parser');


app.use('/', express.static(path.join(__dirname, '../client/public')))


app.listen(port, () => console.log(`${title} listening on port ${port}!`))
