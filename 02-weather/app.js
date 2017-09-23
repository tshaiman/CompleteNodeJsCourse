
const yargs = require('yargs')

const geo = require('./geoCode/geoCode.js')
const weather = require('./weather.io/forecast')

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
        weather.forecast(results.lat,results.lng, (w_err,w_res)=>{
            if(w_err) {
                console.log(w_err)
            }else {
                //console.log(JSON.stringify(w_res,undefined,2))
                console.log(`Its currently ${w_res.temprature} , It feels like ${w_res.apparentTemperature}`)
            }
        })
    }
})