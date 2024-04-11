//IMporterat in Person klassen
const { Person } = require("./person")

//SKapar 2st objekt av person klassen
let p1 = new Person("Marcus")
let p2 = new Person("Niklas", "Cullberg");
//p2.firstname = "Niklas"

console.log(p1.fullName())
console.log(p2.fullName())

//Deklarerar ett nytt attribut i objektet
p1.eyeColor = "Blue"
console.log(p1.eyeColor)

//For In loop
for (x in p1) {
    //SKriver ut deklarerade attribut samt deras värden
    console.log(`${x}: ${p1[x]}`)
}