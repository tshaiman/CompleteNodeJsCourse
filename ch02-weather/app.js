
const yargs = require('yargs')

const geo = require('./geoCode/geoCode.js')

const argv = yargs.option({
    a: {
        demand: true,
        alias: "address",
        describe: "Address to fetch weather for",
        string: true
    }})
    .help()
    .argv;

geo.geoAddress(argv.a,(errMsg,results)=>{
    if(errMsg){
        console.log(errMsg)
    } else {
        console.log(JSON.stringify(results,undefined,2))
    }
})