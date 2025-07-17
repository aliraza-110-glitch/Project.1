const person = {
    name: "John",
    age: 18,
    height: "6ft",
    shirt:{
        color: "Red",
        size:"Large"
    },
    tasks:['array','object','functions']
}

const car ={
    make: "Suzuki",
    model: "2002",
    varient:"Honda 1.6"
}
const car2 = car

// 

// 

car2.model = '2015'

console.log(car)
console.log(car2)