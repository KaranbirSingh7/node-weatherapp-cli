const request = require('request');

var geocodeAddress = (address) => {
    return new Promise((resolve,reject) => {
        request({
            url: `https://maps.google.com/maps/api/geocode/json?address=${encodeURIComponent(address)}`,
            json: true
        },(error,response,body) => {
           if (error){
                reject('Unable to connect to Google Servers.');
            }else if(body.status === 'ZERO_RESULTS'){
                reject('Check Address Carefully');
            }else if (body.status === 'OK'){
                resolve({
                    address:body.results[0].formatted_address,
                    latitude:body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                }
            )}
        })
    })
}


geocodeAddress('7 flaming oak ct').then((resolve) => {
    console.log(JSON.stringify(resolve, undefined, 2));
},(reject) => {
    console.log(reject);
});

