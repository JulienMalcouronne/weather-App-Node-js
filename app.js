const geocode = require('./utils/geocode')
// const url = "http://api.weatherstack.com/current?access_key=4d126ad5c1a186bf6e5841ba892f60dd&query=37.8267,-122.4233&units=f"

// request({url: url, json: true}, (error, response) => {
//   if (error) {
//       console.log('Unable to connect to weather service!');
//   } else if (response.body.error) {
//       console.log('Unable to find location');
//   } else {
//       console.log(` ${response.body.current.weather_descriptions[0]}. it is ${response.body.current.temperature} farenheit degree, it feelslike ${response.body.current.feelslike} Farenheit `);
//      // const data = JSON.parse(response.body) thanks do json: true we don't need that
//      // console.log(data.current)
//   }

// })

geocode('Paris', (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})
