const request = require('request');

var getWeather = (lat,long,callback) => {
    request({
        url: `https://api.darksky.net/forecast/5bb913e1823968116ad2d5cd79d70cea/${lat},${long}`,
        json: true
    }, (error,response,body) => {
        if (!error & response.statusCode === 200){
            callback(undefined, {
                temp:((body.currently.temperature - 32) * 5/9).toFixed(2),
                type: body.currently.icon,
                apparentTemp: ((body.currently.apparentTemperature - 32 ) * 5/9).toFixed(2)
            });
        } else {
            callback('Unable to fetch data');
        }
    });
}

module.exports = {
    getWeather
}