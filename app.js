const yargs = require('yargs');
const geocode = require('./geocode/geocode'); 
const weather = require('./weather/weather');

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

geocode.geocodeAddress(args.address, (error, results) => {
    if (error){
        console.log(error);
    }else{
        console.log(results.address);
        weather.getWeather(results.latitude,results.longitude, (error, results) => {
            if(error){
                console.log(error);
            } else {
                console.log(`It's ${results.type}`);
                console.log(`It's currently ${results.temp} celsius but it feels like ${results.apparentTemp} celsius`);
            }
        });
    }
});



