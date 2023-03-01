const filterRangeInPlace = (arr, min, max) => {
    for(let i = 0; i <= arr.length; i++) {
        if(arr[i] < min || arr[i] > max) {
            arr.splice(i, 1)
            i--
        }
    }
}
