{
    //type assertion
    let anything: any;
    anything= "next level web development";
    
    (anything as string)
        anything = 222;

    (anything as number)

    const kgToGm = (value:string | number): string | number | undefined=>{
        if(typeof value === 'string'){
            const convertedValue = parseFloat(value)* 1000;
            return `The converted `
        }
        if(typeof value === 'number'){
            return value*1000
        }
    }

    const result1 = kgToGm(1000) as number
    const result2 = kgToGm("1000") as  string

    type CustomError = {
        message: string
    }
    try{

    }catch(error){
        console.log((error as CustomError).message);
    }



}