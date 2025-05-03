"use strict";
{
    //spread operator
    //rest operator
    //destructing
    const bros1 = ['Mir', 'firoz', 'mizan'];
    const bros2 = ['tanmoy', 'nahid', 'rahat'];
    bros1.push(...bros2);
    const mentors = {
        typescript: 'mezba',
        redux: 'Mir',
        dbms: 'Mizan'
    };
    const mentors2 = {
        prisma: 'Firoz',
        next: 'tonmoi',
        cloud: 'nahid'
    };
    const mentorList = Object.assign(Object.assign({}, mentors), mentors2);
    //learn rest operator
    const greetingFriends = (...friends) => {
        friends.forEach((friend) => console.log(`Hi ${friend}`));
        greetingFriends('abul', "kabul", 'babul', 'ubul', 'labul');
    };
}
