{
    // instanceof Guard
    class Animal{
        name: string;
        species: string;
        
        constructor(name: string, species: string){
            this.name = name;
            this.species = species;
        }
        makeSound(){
            console.log("I am Making sound");
        }
    }

    class Dog extends Animal{
        constructor(name:string, species:string){
            super(name, species);
        }
        makeBark(){
            console.log("I am Barking");
        }
    }

    class Cat extends Animal{
        constructor(name: string, species: string){
            super(name, species);
        }
        makeMeaw(){
            console.log("I am meawing")
        }
    }

    // smart way tag handle korar jonno chaile amra function bebohar krte pari

    const isDog = (animal: Animal): animal is Dog=>{
        return animal instanceof Dog
    }
    
    const isCat = (animal: Animal): animal is Cat =>{
        return animal instanceof Cat
    }

    const getAnimal = (animal: Animal)=>{
        // if(animal instanceof Dog){
        //     animal.makeBark();
        // }
        // else if(animal instanceof Cat){
        //     animal.makeMeaw();
        if(isDog(animal)){
            animal.makeBark();
        }
        else if(isCat(animal)){
            animal.makeMeaw();
        }
        else{
            animal.makeSound();
        }
       
    }
    const dog = new Dog("Dog bhai", "dog");
    const cat = new Cat("Dog bhai", "dog");

}