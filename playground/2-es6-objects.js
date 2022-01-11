//Object property shorthand

const username = 'Julien'
const userAge = 27

const user = {
  name: username,
  age: userAge,
  location: 'Paris'
}

console.log(user)
// Object destructuring

const product = {
  label: 'Red notebook',
  price: 3,
  stock: 201,
  salePrice: undefined,
  rating: 4.2
}

// const label = product.label
// const stock = product.stock
// label:productLabel to rename label
// rating = 5 is a default value if there are no rating in the product object
// const {label:productLabel, stock, rating = 5} = product
// console.log(label)
// console.log(stock)
// console.log(rating)

const transaction = (type, { label, stock }) => {
  console.log(type, label, stock)
}

transaction('order', product)
