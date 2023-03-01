let someObj = {}

function ReturnObj() {
    return someObj
}
function ReturnSomeObj() {
    return someObj
}

alert( new ReturnObj() === new ReturnSomeObj() )
