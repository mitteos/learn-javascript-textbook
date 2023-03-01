const login = prompt("Login:")

if(login === "Админ") {
    const password = prompt("Password:")

    if(password === "Я главный") alert("Здравствуйте!")
    else {
        if(password == null) {
            alert("Отменено")
        } else alert("Неверный пароль")
    }
} else if(login == null) {
    alert("Отменено")
} else {
    alert("Я вас не знаю")
}
