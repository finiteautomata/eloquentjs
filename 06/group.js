class Group {
    constructor() {
        this.elements = []
    }

    add(elem) {
        let idx = this.elements.indexOf(elem);
        if (idx == -1) {
            // Must add
            this.elements.push(elem)
        }
    }

    has(elem) {
        return this.elements.indexOf(elem) != -1;
    }

    get length() {
        return this.elements.length;
    }

    static from(elements) {
        let group = new Group();

        for (let elem of elements) {
            group.add(elem);
        }

        return group;
    }
}

class GroupIterator {
    constructor(group) {
        this.pos = 0;
        this.group = group;
    }

    next() {
        if (this.pos == this.group.length)
            return {done:true}
        else {
            let value = this.group.elements[this.pos];
            this.pos++;
            return {value, done:false}
        }
    }
}

Group.prototype[Symbol.iterator] = function () {
    return new GroupIterator(this);
}

module.exports = {
    Group,
}