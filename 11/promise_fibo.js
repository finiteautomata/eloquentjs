"use strict";

let calculatedFibos = Object.create(null);

calculatedFibos[0] = 1;
calculatedFibos[1] = 1;

let largestCalculated = 1;

function memoizedFibo(n) {
    return new Promise((resolve, reject) => {
        if (n < 0) {
            reject(
                new Error(`${n} is less than 0 -- undefined value`)
            )
        }
        if (n > largestCalculated) {
            // Calculate them
            for (let c = largestCalculated+1; c <= n; ++c)
                calculatedFibos[c] = calculatedFibos[c - 1] + calculatedFibos[c - 2];
            largestCalculated = n;
        }

        resolve(calculatedFibos[n]);
    })
}

module.exports = {
    memoizedFibo
}