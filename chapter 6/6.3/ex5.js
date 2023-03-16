const inBetween = (a, b) => (el) => el >= a && el <= b

const inArray = (arr) => (el) => el.includes(arr)
