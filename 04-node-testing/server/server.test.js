
const request = require('supertest')
const expect = require('expect')

var app = require('./server').app

describe('Server',()=>{

    describe("GET /",()=>{
        it('should return response',(done)=>{
            request(app)
            .get('/')
            .expect(404)
            .expect((res)=>{
                expect(res.body).toInclude({age:33});
                expect(res.body).toInclude({name:"Tomer"});
            })
            .end(done)
        })
    })

    describe("GET /users", ()=>{
        it('should get users ',(done) => {
            request(app)
            .get('/users')
            .expect(200)
            .expect((res) => {
                expect(res.body).toInclude({name:"Roni", age:12});
            })
            .end(done)
        })
    })
})





