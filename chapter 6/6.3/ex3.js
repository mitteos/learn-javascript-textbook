let phrase = "Hello";

if (true) {
    let user = "John";

    function sayHi() {
        alert(`${phrase}, ${user}`);
    }

    sayHi(); // тут может
}

sayHi(); // область видимости не позволит вызвать функцию из этого места
