const util  = require('./util')
const expect = require('expect')

it('Should add two numbers',()=>{
    var res = util.add(1,3)
    expect(res).toBe(4,"it should be 4").toBeA('number')
})


it('Should square a number',()=>{
    var res = util.square(12)
    expect(res).toBe(144,"it should be 144").toBeA('number')
    
})

it('more except examples', ()=>{
    expect(12).toEqual(12);
    expect({name:"Tomer"}).toNotBe({name:"Tomer"})
    expect({name:"Tomer"}).toEqual({name:"Tomer"})
    expect([1,2,3,4,5]).toInclude(4)
    expect({name:"Tomer",age:25,Address:"Kfar Saba"}).toInclude({age:25})
})

it('verify user first last name' , () =>{
    var user = {Id:"033453",age:44};
    var modified = util.setName(user,"Tomer Shaiman");
    expect(modified).toInclude({firstName:"Tomer",lastName:"Shaiman"})
})

it('test addAsync' ,(done)=>{
    util.addAsync(3,5).then((res)=>{
        expect(res).toBe(8)
        done();
    },(e)=>{
        expect(false).toExists()
        done();
    })
})