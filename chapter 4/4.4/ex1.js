function makeUser() {
    return {
        name: "John",
        ref: this
    };
}

let user = makeUser();

alert( user.ref.name ); // undefined, т.к. берет значение в области функции, в которой нет значения name
