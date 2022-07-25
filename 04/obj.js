function deepEqual(o1, o2) {
    if (o1 == o2)
        return true;
    else {
        let o1Keys = Object.keys(o1);
        let o2Keys = Object.keys(o2);

        if (o1Keys.length != o2Keys.length) return false;
        else {
            for (let key of o1Keys) {
                if (!o2.hasOwnProperty(key)) return false;
                if (o1[key] != o2[key]) return false;
            }
            return true;
        }
    }
}

module.exports = deepEqual;