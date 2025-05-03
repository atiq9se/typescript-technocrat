{
    //spread operator
    //rest operator
    //destructing


    const bros1:string[] = ['Mir', 'firoz', 'mizan']
    const bros2:string[] = ['tanmoy', 'nahid', 'rahat']

    bros1.push(...bros2)

    const mentors = {
        typescript: 'mezba',
        redux: 'Mir',
        dbms: 'Mizan'
    }
    const mentors2 ={
        prisma: 'Firoz',
        next: 'tonmoi',
        cloud: 'nahid'
    }

    const mentorList = {
        ...mentors,
        ...mentors2
    }

    //learn rest operator
    const greetingFriends=(...friends:string[]) =>{
        friends.forEach((friend: string)=>console.log(`Hi ${friend}`))

        greetingFriends('abul', "kabul", 'babul', 'ubul', 'labul')
    }


}
