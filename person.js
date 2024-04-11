class person {
    //Construktor
    constructor(firstname, lastname = "Henrikson") {
        this.firstname = firstname
        this.lastname = lastname
    }

    fullName(){
        return `${this.firstname} ${this.lastname}`
    }
}

class Animal {
    constructor(name, age, species) {
        this.name = name;
        this.age = age;
        this.species = species;
    }

    aging() {
        this.age++;
    }

    toString() {
        console.log(`Denna ${this.species} heter ${this.name} och är ${this.age} år gammal.`);
    }
}

module.exports = { person, Animal }