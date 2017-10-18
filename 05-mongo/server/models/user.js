

var {mongoose} = require('../db/mongoose.js')

var User = mongoose.model('User', {
    email : {
        type : String,
        required : true,
        minLength : 1,
        trim : true 
    },
    age : {
        type : Number,
        default: null
    }
});

module.exports = {User};