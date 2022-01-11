setTimeout(() => {
  console.log('two seconds are up')
}, 2000);

const names = ['Julien', 'Joe', 'Pierre']
const shortNames = names.filter((name) => {
  return name.length <= 4
})

const geocode = (address, callback) => {
  setTimeout(() => {
    const data = {
      latitude: 0,
      longitude: 0
    }
    callback(data)
  }, 2000);
}
geocode('Piladelphia', (data) => {
  console.log(data)
})


const math = (number1, number2, callback) => {
  setTimeout(() => {
      callback(number1 + number2)
  }, 2000);
}

math(2, 4, (data) => {
  console.log(data)
})
