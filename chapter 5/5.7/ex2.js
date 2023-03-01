let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

const aclean = (arr) => {
    let map = new Map()
    for (let word of arr) {
        let sorted = word.toLowerCase().split("").sort().join("")
        map.set(sorted, word)
    }
    return Array.from(map.values())
}

alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"
