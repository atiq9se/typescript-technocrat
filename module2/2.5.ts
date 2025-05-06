{
    //function with generics

    const createArray = (param: string): string[]=>{
        return [param]
    }

    const createArrayWithGeneric = <T>(param:T) : T[]=>{
        return [param];
    }

    type User = {id: number, name: string};

    const res1 = createArray('Bangladesh')
    const resGeneric = createArrayWithGeneric<string>('Bangladesh')
    //const resGenericObj = createArrayWithGeneric<object>({id:222, name:'mr.pashan'})
    const resGenericObj = createArrayWithGeneric<User>({id:222, name:'mr.pashan'})


    const createArrayWithTuple = <T, Q>(param1:T, param2: Q) : [T, Q]=>{
        return [param1, param2];
    }
    const res10 = createArrayWithTuple<string, number>('Bangladesh', 222);
    const res11 = createArrayWithTuple<string,{name:string} >('Bangladesh', {name: 'asia'});

    const addCourseToStudent = <T>(student: T) =>{
        const course = 'Next level web development'
        return{
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent({name:'mr.x', email: 'x@gmail.com', devType:'NLWD'})
    const student2 = addCourseToStudent({name:'mr.y', email: 'y@gmail.com', hashWatch:'Apple Watch'})
}