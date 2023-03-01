const messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
]

const readMap = new WeakMap()
readMap.set(messages[0], new Date(2023, 1, 1))
