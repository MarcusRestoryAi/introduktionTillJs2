const { Person } = require("./person")

let p1 = new Person("Marcus")
let p2 = new Person("Niklas", "Cullberg");
//p2.firstname = "Niklas"
console.log(p1.fullName())
console.log(p2.fullName())

p1.eyeColor = "Blue"

console.log(p1.eyeColor)

//For In loop
for (x in p1) {
    console.log(`${x}: ${p1[x]}`)
}