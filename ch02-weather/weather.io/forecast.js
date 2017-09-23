const request = require('request')


//https://api.darksky.net/forecast/22e984ddfba4e2afde33384e42e39789/37.8267,-122.4233
const baseAddress = 'https://api.darksky.net/forecast/22e984ddfba4e2afde33384e42e39789/'

var forecast = (lat, lng, callback) => {
    request({ url: `${baseAddress}${lat},${lng}`, json: true },
        (error, response, body) => {
            if (!error && response.statusCode === 200) {
                callback(undefined,
                    {
                        temprature: body.currently.temperature,
                        summary: body.currently.summary,
                        apparentTemperature : body.currently.apparentTemperature
                    })
            } else {
                callback(`Could not fetch weather forecast.`)
            }
        });
}

module.exports.forecast = forecast;