"use strict";
// destructuring
{
    const user = {
        id: 345,
        name: {
            firstName: 'mezbaul',
            middleName: 'abedin',
            lastName: 'Persian'
        },
        contactNo: '0170000000',
        address: 'Uganda',
    };
    const { contactNo, name: { middleName: midName } } = user;
    const myFriends = ['chandler', 'joey', 'ross', 'rachel', 'monica', 'phebe'];
    const [a, b, bestFriend, ...rest] = myFriends;
}
