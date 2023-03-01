function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        // ...
        return confirm('Родители разрешили?');
    }
}


function checkAge(age) {
    if (age > 18) {
        return true;
    }
    // ...
    return confirm('Родители разрешили?');
}


// НИЧЕГО НЕ ИЗМЕНИТСЯ, т.к. если в условии будет истина, то функция вернет true, если нет, то пойдет дальше
