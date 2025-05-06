{
    //generic constraint with key of operator

    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
    }
    type Owner = "bike" | "car" | "ship"; //manually

    type Owner2 = keyof Vehicle
    

    // const user = {
    //     name:'parsian',
    //     age: 26,
    //     address: 'ctg'
    // }

    // user['name'] 'mr.persian'
}