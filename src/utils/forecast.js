const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'https://api.darksky.net/forecast/da3f9d24f5c96679830273a147c19831/'+ lat + ',' + long +'?units=si'
    request({
        url,
        json: true
    }, (error, { body }) => {
        if (error){
            callback('Unable to find location', undefined)
        }else if (body.code === 400){
            callback('The given location (or time) is invalid.', undefined)
        }
        else{
            var temp = body.currently.temperature
            var precip = body.currently.precipProbability
            var todaySummary = body.daily.data[0].summary

            callback(undefined, {
                temperature: temp,
                precipitate: precip,
                summary: todaySummary
            })
        }
    })
}

module.exports = forecast

//54262718