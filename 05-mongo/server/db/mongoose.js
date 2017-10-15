var mongoose = require('mongoose')

mongoose.Promise = global.Promise
var mongoHost = process.env.MONGODB_URI ;
mongoose.connect(mongoHost)

module.exports = {mongoose}