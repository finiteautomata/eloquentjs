
const sum = (...numbers) => {
    let ret = 0;
    for (let num of numbers) {
        ret += num;
    }

    return ret;
}

module.exports = sum