{
    //utility types
    //pick

    type Person = {
        name: string;
        age: number;
        email? : string;
        contactNo: string
    }

    type NameAge = Pick<Person, "name" | "age">

    //Omit
    type ContactInfo = Omit<Person, "name" | "age" >
    //Required 
    type PersonReuired = Required<Person>
    //Partial 
    type PersonPartial = Partial<Person>

    // Readonly
    type PersonReadOnly = Readonly<Person>

    const person1: Person = {
        name: "mr.xy",
        age: 200,
        contactNo: "o17"
    }
    person1.name = "mr.yz"

    //Record
    // type MyObj = {
    //     a: string,
    //     b: string
    // }

    type MyObj = Record<string, string>

    const EmptyObj: Record<string, unknown> = {}

    const obj1: MyObj = {
        a: "aa",
        b: "bb",
        c: "cc",
        d: "dd"
    }


    


}