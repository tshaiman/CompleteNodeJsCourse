var mongoose = require('mongoose')

mongoose.Promise = global.Promise
var mongoHost = process.env.MONGO_HOST
mongoose.connect(mongoHost)

module.exports = {mongoose}