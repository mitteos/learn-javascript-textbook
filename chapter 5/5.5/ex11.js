let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

const getAverageAge = (users) => {
    return users.reduce((prev, next) => prev + next.age, 0) / users.length
}

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
