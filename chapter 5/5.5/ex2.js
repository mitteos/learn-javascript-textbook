let arr = [5, 3, 8, 1]

const filterRange = (arr, min, max) => {
    return arr.filter(el => el >= min && el <= max)
}

let filtered = filterRange(arr, 1, 4)

alert( filtered ); // 3,1 (совпадающие значения)

alert( arr ); // 5,3,8,1 (без изменений)
