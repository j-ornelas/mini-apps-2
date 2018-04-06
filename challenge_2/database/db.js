var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/userdata');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('connected to mongoose')
});

var userSchema = mongoose.Schema({
  firstName: String,
  lastname: String,
  email: String,
  password: String,
  addressOne: String,
  addressTwo: String,
  city: String,
  state: String,
  zip: String,
  phone: String,
  cardNum: String,
  expDate: String,
  ccv: String,
  billingZip: String
})

var User = mongoose.model('User', userSchema)

var saveItem = function(obj){
  var newUser = new User({
    firstName: obj.firstName,
    lastName: obj.lastName,
    email: obj.email,
    password: obj.password,
    addressOne: obj.addressOne,
    addressTwo: obj.addressTwo,
    city: obj.city,
    state: obj.state,
    zip: obj.zip,
    phone: obj.phone,
    cardNum: obj.cardNum,
    expDate: obj.expDate,
    ccv: obj.ccv,
    billingZip: obj.billingZip
  })
}


module.exports.User = User;
module.exports.saveItem = saveItem;
