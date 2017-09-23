
const request = require('request')


var geoAddress = (addr,callback)=> {
    var addr = encodeURIComponent(addr);
    request({ url: `https://maps.googleapis.com/maps/api/geocode/json?address=${addr}&key=AIzaSyBCTQeabDMJDFe_BLLI57hOaxQVozEgfoY`, json: true },
        (error, response, body) => {
            if (error) {
                callback('A server error has occured')
            } else if (body.status === 'ZERO_RESULTS') {
                callback('No Results were found')
            }else {
                callback(undefined,{
                    address : body.results[0].formatted_address,
                    lat : body.results[0].geometry.location.lat,
                    lng : body.results[0].geometry.location.lng
                })    
            }
        });
}

module.exports = {
    geoAddress
}