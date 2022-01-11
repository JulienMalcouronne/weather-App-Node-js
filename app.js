const request = require('request')

const url = "http://api.weatherstack.com/current?access_key=4d126ad5c1a186bf6e5841ba892f60dd&query=37.8267,-122.4233&units=f"

request({url: url, json: true}, (error, response) => {
  if (error) {
      console.log('Unable to connect to weather service!');
  } else if (response.body.error) {
      console.log('Unable to find location');
  } else {
      console.log(` ${response.body.current.weather_descriptions[0]}. it is ${response.body.current.temperature} farenheit degree, it feelslike ${response.body.current.feelslike} Farenheit `);
     // const data = JSON.parse(response.body) thanks do json: true we don't need that
     // console.log(data.current)
  }

})


const urlGeo = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoianVsaWVubWFsIiwiYSI6ImNrd3Z3M3Z0MzFtN2IzMWxzdzFtNG0xdTEifQ.mI8ofvz_w0NV4p9AtYoOqw&limit=1"
request({url: urlGeo, json: true}, (error, response) => {
  if (error) {
      console.log('Unable to connect to Geocoding service');
  } else if (response.body.features.length === 0) {
      console.log('unable to locate the location you entered');
  } else {
      const latitude = response.body.features[0].center[1];
      const longitude = response.body.features[0].center[0];
      console.log(latitude, longitude);
  }
})
