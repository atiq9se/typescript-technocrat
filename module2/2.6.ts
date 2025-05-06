{
    // constraints
    const addCourseToStudent = <T>(student: T) =>{
        const course = 'Next level web development'
        return{
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent<{
        id: number;
        name: string;
        email: string;
        devType: string;
    }>({
        id:222,
        name:'mr.x', 
        email: 'x@gmail.com', 
        devType:'NLWD'
    })
    const student2 = addCourseToStudent({
        id:333,
        name:'mr.y', 
        email: 'y@gmail.com', 
        hashWatch:'Apple Watch'
    })
    
}