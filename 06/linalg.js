class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    sum(anotherVector) {
        return new Vector(
            this.x + anotherVector.x,
            this.y + anotherVector.y
        );
    }

    scale(coeff) {
        return new Vector(
            coeff * this.x,
            coeff * this.y
        );
    }

    get length() {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }
}

module.exports = {
    Vector,
}