{
    //type of ---> type guard
    type Alphaneumeric = string | number;

    const add = (
        param1: Alphaneumeric, 
        param2: Alphaneumeric)
        : Alphaneumeric =>{
        if(param1=== "number" && param2 === "number"){
            return param1+param2
        }else{
            return param1.toString() + param2.toString()
        }
    }
    const result1 = add(2, 3);
    console.log(result1);

    // in Guard

    type NormalUser = {
        name: string
    }
    type AdminUser = {
        name: string;
        role: "admin"
    }

    const getUser = (user: NormalUser | AdminUser)=>{
        if('role' in user){
            console.log(`My name is ${user.name} and my role is ${user.role}`);
        }else{
            console.log(`My name is ${user.name}`);
        }
    }
    const normalUser: NormalUser = {
        name: "Mr. Normal bhai"
    }

    const adminUser: AdminUser = {
        name: "Mr. admin bhai",
        role: "admin"
    }

    getUser(normalUser);

}