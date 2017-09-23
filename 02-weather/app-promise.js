
const yargs = require('yargs')
const axios = require('axios')

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
    .alias('help','h')
    .argv;

    var encAddress = encodeURIComponent(argv.a);
    var geoCodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encAddress}&key=AIzaSyBCTQeabDMJDFe_BLLI57hOaxQVozEgfoY`


    axios.get(geoCodeUrl).then((response)=>{
        if(response.data.status === 'ZERO_RESULTS'){
            throw new Error("Unable to find that address");
        }
        var loc = response.data.results[0].geometry.location
        var weatherUrl = `https://api.darksky.net/forecast/22e984ddfba4e2afde33384e42e39789/${loc.lat},${loc.lng}`
        console.log(response.data.results[0].formatted_address)
        return axios.get(weatherUrl);
    }).then((res)=>{
        console.log(`It is now ${res.data.currently.temperature} . Feels like ${res.data.currently.apparentTemperature}`)
    })
    .catch((err)=>{
        if(err.code === 'ENOTFOUND') {
            console.log("could not connect to the Geo API Server")
        } else {
            console.log (err)
        }
    })

