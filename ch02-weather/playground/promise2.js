const request = require('request')

var geoCodeAddress = (address) => {
    return new Promise((resolve,reject)=>{
        var encAddress = encodeURIComponent(address);
        request({ url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encAddress}&key=AIzaSyBCTQeabDMJDFe_BLLI57hOaxQVozEgfoY`, json: true },
            (error, response, body) => {
                if (error) {
                    reject('A server error has occured')
                } else if (body.status === 'ZERO_RESULTS') {
                    reject('No Results were found')
                }else {
                    resolve({
                        address : body.results[0].formatted_address,
                        lat : body.results[0].geometry.location.lat,
                        lng : body.results[0].geometry.location.lng
                    })    
                }
            });
    })
}


geoCodeAddress('19146').then((res)=>{
    console.log(JSON.stringify(res,undefined,2))
},(err)=>{
    console.log(err)
})