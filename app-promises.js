const users = [{
    id: 1,
    name: 'Dima',
    workID: 101
}, {
    id: 2,
    name: 'Alex',
    workID: 102
}];

const grades = [{
    id: 1,
    workID: 101,
    grade: 60
},{
    id: 2,
    workID: 101,
    grade: 80
},{
    id: 3,
    workID: 102,
    grade: 100
}];

const getUser = (id) => {
    return new Promise((resolve, reject) => {
        const user = users.find((user) =>  user.id === id);

        if(user) {
            resolve(user)
        } else {
            reject(`Unable to find user with id ${id}.`);
        }
    });
};

const getGrades = (workID) => {
    return new Promise((resolve, reject) => {
        resolve(grades.filter((grade) => grade.workID === workID));
    });
}

// Dima has 83% in the class
const getStatus = (userID) => {
    var user;
    return getUser(userID).then((tmpUser) => {
        user = tmpUser;
        return getGrades(user.workID);
    }).then((grades) => {
        let average = 0; 

        if(grades.length > 0) {
            average = grades.map((grade) => grade.grade).reduce((a,b) => a + b) / grades.length;
        }
        return `${user.name} has a ${average} in the class.`;
    })
}


getStatus(2).then((status) => {
    console.log(status);
}).catch((e)=> {
    console.log(e);
});

