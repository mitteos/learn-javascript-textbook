function sum(a) {
    let result = a;

    function currentSum(b) {
        result += b
        return currentSum
    }

    currentSum.toString = () => result

    return currentSum
}

alert( sum(1)(2) ); // 3
alert( sum(5)(-1)(2) ); // 6
alert( sum(6)(-1)(-2)(-3) ); // 0
alert( sum(0)(1)(2)(3)(4)(5) ); // 15
