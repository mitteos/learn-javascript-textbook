let user = {
    name: 'John',
    age: 30
};

const count = (obj) => Object.keys(obj).length

alert( count(user) ); // 2
