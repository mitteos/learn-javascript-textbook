const messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
]

const readMessages = new WeakSet()

for(let i = 0; i <= messages.length; i++) {
    readMessages.add({...messages[i], isChecked: false})
}
