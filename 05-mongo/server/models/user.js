

const validator = require('validator');
const {mongoose} = require('../db/mongoose.js')
const jwt = require('jsonwebtoken');

var UserSchema = new mongoose.Schema({
        email : {
            type : String,
            required : true,
            trim : true ,
            minLength : 1,
            unique : true,
            validate: {
                validator: validator.isEmail,
                message: '{VALUE} is not a valid email!'
              }
        },
        password :{
            type : String,
            require : true,
            minLength : 6
        },
        tokens : [{
            access : {
                type : String,
                require : true
            },
            token :{
                type : String,
                require : true
            }
        }]
    });

    UserSchema.methods.generateAuthToken = function() {
        var user = this;
        var access = 'auth';
        var token = jwt.sign({_id : user._id.toHexString(),access},'abc123!').toString();

        user.tokens.push({access,token});
        
        return user.save().then(() => {
            return token;
        });
    };

    var User = mongoose.model('User',UserSchema);

module.exports = {User};