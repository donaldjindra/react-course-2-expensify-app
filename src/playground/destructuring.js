// const person = {
//     name: 'Donald',
//     age: 42,
//     location: {
//         city: 'Los Angeles',
//         temp: 90 
//     }
// };

// const {name = 'Anonymous', age} = person;

// console.log(`${name} is ${age} years old.`)

// const {city, temp: temperature} = person.location;
// if(city && temperature) {
//     console.log(`It's ${temperature} in ${city}`)
// }

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147']

const [street, city, state, zipcode] = address;

console.log(`You are in ${city} ${state}`)

const item = ['Cofeee (hot)','$2.00', '$2.50', '$2.75']

const [hotCoffee, ,mediumPrice] = item

console.log(`A medium ${hotCoffee} costs ${mediumPrice}`)