{
    //oop - inheritence

    // class Student {
    //     name: string;
    //     age: number;
    //     address: string;

    //     constructor(name:string, age:number, address: string){
    //         this.name = name;
    //         this.age = age;
    //         this.address = address;
    //     }
    //     getSleep(numOfHours: number){
    //         console.log(`${this.name} will sleep for ${numOfHours}`);
    //     }

    // }

    // const student1 = new Student("Mr. studnet", 20, "Uganda");



    class Parent {
        name: string;
        age: number;
        address: string;

        constructor(name:string, age:number, address: string){
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(numOfHours: number){
            console.log(`${this.name} will sleep for ${numOfHours}`);
        }

    }

    class Student extends Parent {
        constructor(name: string, age: number, address: string){
            super(name, age, address)
        }
    }
    const student1 = new Student("Mr. studnet", 20, "Uganda");

    class Teacher extends Parent{
        designation: string

        constructor(name: string, age:number, address: string, designation: string){
            super(name, age, address)
            this.designation = designation
        }

        takeClass(numOfClass: number){
            console.log(`${this.name} will take ${numOfClass}`);
        }
    }

    const teacher = new Teacher("mr.teacher", 40, "uganda", "professor");


    //
}