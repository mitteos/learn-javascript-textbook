function sumToCycle(n) {
    let result = 0
    for(let i = n; i >= 1; i--) {
        result += i
    }
    return result
}

function sumToRecursion(n) {
    if(n === 1) return 1

    return n + sumToRecursion(n - 1 )
}

const sumTo = (n) => n * (n + 1) / 2 // самый быстрый, не наполняется стек

alert( sumToRecursion(100) ); // 5050
