{
    // generic type
    
    //type GenericArray = Array<boolean>
    //type GenericArray<param> = Array<param>
    type GenericArray<T> = Array<T>  // type hisabe pathano hoitece


    //const rollNumbers : number []= [3,6,8];
    //const rollNumbers : Array<number>= [3,6,8];
    const rollNumbers : GenericArray<number>= [3,6,8];

    //const mentors: string[] = ['mr.x', 'mr.y', 'mr.z']
    //const mentors: Array<string> = ['mr.x', 'mr.y', 'mr.z']
    const mentors: GenericArray<string> = ['mr.x', 'mr.y', 'mr.z']

    //const boolArray: boolean[] = [true, false, true]
    //const boolArray: Array<boolean>= [true, false, true]
    const boolArray: GenericArray<boolean>= [true, false, true]

    type User = {
        name: string;
        age:number
    }
    
    const user:GenericArray<{name:string, age:number}> = [
        {
            name: 'mezba',
            age: 100
        },
        {
            name: 'jhankar mahbub',
            age:"110"
        },
        {
            role:'admin'
        }
    ]

    const add = (x: number, y: number) => x+y
    
    add(30, 20)


    //generic Tuple
    type GenericTuple<x, y> = [x, y]

    const manush : GenericTuple<string, string> = ['mr.x', 'Mr.Y']
    const UserWithID: GenericTuple<number, {name: string, email: string}>= [1234, {name:'persian', email: 'a@gmail.com'}]

}