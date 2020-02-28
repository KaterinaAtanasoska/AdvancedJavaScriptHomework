//type - carnivore/herbivore/omnivore

class Animal {
    constructor(name, type, age, size) {
        this.name = name;
        this.type = type;
        this.age = age;
        this.size = size;
        this.isEaten = false;
    };

    eat(insertAnimal) {
        if(insertAnimal instanceof Animal) {
            if(this.type === "herbivore") {
                return(console.log(`The animal ${this.name} is a herbivore and does not eat other animals.`));
            } else if(this.type !== "herbiovre" && this.size >= insertAnimal.size) {
                this.isEaten = true;
                return(console.log(`The animal ${this.name} ate the ${insertAnimal.name} `));
            } 
            if(insertAnimal.size > (this.size * 2) ) {
                return(console.log(`The animal ${this.name} tried to eat the ${insertAnimal.name} but it was too large.`));
            }
            } else {
                return(console.log(`The animal ${this.name}  is eating ${insertAnimal}.`));
            };
    };
};

let zebra = new Animal("Zebra", "herbivore", 4, 1);
console.log(zebra);
zebra.eat("Cactus");

let lion = new Animal("Lion", "carnivore", 7, 1.2);
console.log(lion);
lion.eat(zebra);

let elephant = new Animal("Elephant", "herbivore", 10, 3.2);
console.log(elephant);
elephant.eat(lion);

let bear = new Animal("Bear", "omnivore", 8, 1.3);
console.log(bear);
bear.eat(elephant);

