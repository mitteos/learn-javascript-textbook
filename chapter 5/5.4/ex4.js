const sumInput = () => {
    const stack = []
    while (true) {
        let value = prompt("Введите число", "0")
        if (value === "" || value === null || !isFinite(+value)) break
        stack.push(+value)
    }
    let sum = 0
    for (let number of stack) {
        sum += number
    }
    return sum
}

alert( sumInput() )
