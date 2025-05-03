{
    //union types
    // type frontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper'
    // type FullstackDeveloper = 'frontendDeveloper' | 'expertDeveloper'


    // const newDeveloper : frontendDeveloper = 'juniorDeveloper'

    // type User ={
    //     name: string;
    //     email?: string;
    //     gender: 'male' | 'female';
    //     bloodGroup: 'o+' | "A+" | "AB+"
    // }

    // const user1: User ={
    //     name: 'persian',
    //     gender: 'male',
    //     bloodGroup: 'o+'
    // }

    type FrontendDeveloper = {
        skills: string[];
        designation1: 'Frontend Developer'
    }

    type BackendDeveloper = {
        skills: string[];
        designation2: 'Backend Developer'
    }

    type FullstackDeveloper = FrontendDeveloper & BackendDeveloper

    const fullstackDeveloper : FullstackDeveloper = {
        skills: ['HTML' , 'CSS', 'EXPRESS'],
        designation1: 'Frontend Developer',
        designation2 : 'Backend Developer'
    }
}