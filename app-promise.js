const yargs = require('yargs');
const axios = require('axios');

var args = yargs
.options({
    a:{
        require: false,
        describe: 'Address For Fetching Data',
        alias: 'address',
        default: '7 flaming oak court',
        string: true
    }
})
.help()
.alias('help','h')
.argv;
    
var geoCodeURL = `https://maps.google.com/maps/api/geocode/json?address=${encodeURIComponent(args.address)}`;

axios.get(geoCodeURL).then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error('Check Address Carefully');
    }
    var lat = response.data.results[0].geometry.location.lat;
    var long = response.data.results[0].geometry.location.lng; 
    var weatherURL = `https://api.darksky.net/forecast/5bb913e1823968116ad2d5cd79d70cea/${lat},${long}`

    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherURL);
}).then((response) => {
    var temp  = response.data.currently.temperature;
    var apparentTemp  = response.data.currently.apparentTemperature;
    console.log(`It's currently ${temp} but it feels like ${apparentTemp}`);
}).catch((e) => {
    if (e.code === 'ENOTFOUND'){
        console.log('Unable to fetch data');
    } else {
        console.log(e.message);
    }
})