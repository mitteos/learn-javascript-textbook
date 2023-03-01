const getMaxSubSum = (arr) => {
    let max = 0
    let sum = 0

    for (let item of arr) {
        sum += item
        max = Math.max(max, sum)
        if (sum < 0) sum = 0
    }
    return max
}
