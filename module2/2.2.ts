{
  // interface 
  type User1 = {
    name: string;
    age: number;
  }

  type UserWithRoll = User1 & {role: string}
  
  const user5: UserWithRoll = {
    name: "persian",
    age:100,
    role: 'manager'
  }


  interface UserWithRoll2 extends User1{
    role: string
  }

  const user6: UserWithRoll2 = {
    name: "persian",
    age:100,
    role: 'manager'
  }

  type RollNumber = number

  interface User2{
    name: string;
    age:number;
  }

  const user1: User2 = {
    name: "Persian",
    age: 100,
  }


  // js--> object, array -> object function -> object

  type Roll = number[];

  interface Roll2{
     [index: number] :number
  }

  const rollNumber1:Roll1 = [1,2,3]
                             0,1,2-> number type


 type Add1 = (num1: number, num2:number)=> number
 interface Add2{
    (num1: number, num2:number): number
 }

 const add:Add2 = (num1, num2)=> num1+num2

}