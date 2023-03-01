function Calculator() {
    this.methods = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
    }

    this.calculate = function(str) {
        const input = str.split(" ")
        const a = input[0]
        const b = input[2]
        const operator = input[1]

        if(!this.methods[operator] || isNaN(a) || isNaN(b)) {
            return "Ошибка"
        }

        return this.methods[operator](a, b)
    }

    this.addMethod = function(name, func) {
        this.methods[name] = func
    }
}
