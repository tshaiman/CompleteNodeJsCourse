const expect = require('expect')
const rewire = require('rewire')

var app = rewire('./app.js')

describe('App' , () => {
    var db = { 
        saveUser : expect.createSpy()
    };
    app.__set__('db',db);

    it('Should call saveUser with user object', () =>{
        var email = "tomer@example.com"
        var password = "123abc"
        app.handleSignup(email,password)
        expect(db.saveUser).toHaveBeenCalledWith({email,password})
    })

    it('Should call the Spy Correctly', () => {
        var spy = expect.createSpy();
        spy();
        expect(spy).toHaveBeenCalled();
    })
})