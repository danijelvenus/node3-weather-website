const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=a4cdb75134c721e34495f2ee42815437&query=${longitude},${latitude}`

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, {
                temp: body.current.temperature,
                precip: body.current.precip,
                description: body.current.weather_descriptions,
                humidity: body.current.humidity
            })
        }
    })
}

module.exports = forecast