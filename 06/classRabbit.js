class Rabbit {
    constructor(type) {
        this.type = type;
    }

    speak(line) {
        console.log(`This rabbit of type ${this.type} says : "${line}"`)
        return this;
    }
}

module.exports = {
    Rabbit
}