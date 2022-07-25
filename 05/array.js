const flatten = (arr) => {
    let ret = []
    for (let e of arr) {
        if (Array.isArray(e)) {
            // Is array => flatten
            let flattened = flatten(e);

            for (let subElem of flattened)
                ret.push(subElem);
        }
        else
            ret.push(e);
    }
    return ret;
}

const loop = (initial, test, update, body) => {
    let curr = initial;

    while (test(curr)) {
        body(curr);
        curr = update(curr);
    }
}

const every = (arr, test) => {
    for (let elem in arr) {
        if (!test(elem))
            return false;
    }
    return true;
}

module.exports = {
    flatten,
    loop,
    every,
}