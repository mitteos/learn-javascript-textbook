let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

const printListCycle = (list) => {
    const stack = []
    let item = list

    while(item) {
        stack.push(item.value)
        item = item.next
    }

    return stack
}

const printListRecursion = (list) => {
    alert(list.value)

    if(list.next) printListRecursion(list.next)
}

alert( printListCycle(list) )
