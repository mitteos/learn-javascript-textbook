let coords = elem.getBoundingClientRect()
let answer1 = [coords.left, coords.top]
let answer2 = [coords.right, coords.bottom]
let answer3 = [coords.left + field.clientLeft, coords.top + field.clientTop]
let answer4 = [coords.left + elem.clientLeft + elem.clientWidth, coords.top + elem.clientTop + elem.clientHeight]
