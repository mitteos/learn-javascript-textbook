const printListCycle = (list) => {
    const stack = []
    let item = list

    while(item) {
        stack.push(item.value)
        item = item.next
    }

    return stack.reverse()
}


const printListRecursion = (list) => {
    if(list.next) printListRecursion(list.next)

    alert(list.value)
}

alert( printListCycle(list) )
