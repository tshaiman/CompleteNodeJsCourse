
var asyncAdd = (a,b) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        if(typeof(a) === 'number' && typeof(b)==='number') {
            resolve(a+b);
        }else {
            reject("Arguments must be numbers")
        }},500)
    })
}


asyncAdd(5,4).then((res)=>{
    console.log(res);
    return asyncAdd(res,33)
}).then((res)=>{
    console.log("The total is " + res)
}).catch((error)=>{
    console.log(error)
})