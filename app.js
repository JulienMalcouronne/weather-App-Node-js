const request = require('request')

const url = "http://api.weatherstack.com/current?access_key=4d126ad5c1a186bf6e5841ba892f60dd&query=New%20York"

request({url: url}, (error, response) => {
  const data = JSON.parse(response.body)
  console.log(data.current)
})
