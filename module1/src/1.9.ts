{

    //type alias

    type Student = {
        name: string;
        age:number;
        gender: string;
        contactNo?: string;
        address: string;
    }

    const student1: Student ={
        name:'mezba',
        age:50,
        gender:'male',
        contactNo: '01700000000',
        address: 'ctg',
    }

    const student2: Student ={
        name:'mir',
        age:40,
        gender: 'male',
        address: 'dhk',
    }

    const student3: {
        name:string;
        age:number;
        gender:string;
        address: string
    }={
        name:'mir',
        age:40,
        gender: 'male',
        address: 'dhk',
    }


    type UserName = string
    type IsAdmin = boolean
    
     const userName: UserName = 'Persian'
     const isAdmin: IsAdmin = true
     
     type Add = (num1: number, num2:number)=>number;

     const add: Add = (num1: number, num2: number): number => num1 + num2;
}