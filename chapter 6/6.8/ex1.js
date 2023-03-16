const printNumbers = (from, to) => {
    let counter = from

    const printer = setInterval(() => {
        alert(counter)
        if(counter === to) clearInterval(printer)
        counter++
    }, 1000)
}

const printNumbersRecursion = (from, to) => {
    let counter = from

    setTimeout(function nextTime() {
        alert(counter)
        if(counter < to) setTimeout(nextTime, 1000)
        counter++
    }, 1000)
}
