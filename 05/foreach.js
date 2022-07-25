const fastFibo = (n) => {
    let count = 2;
    let prev=1, curr = 1;
    while (count < n) {
        let next = prev + curr;
        prev = curr;
        curr = next;
        ++count;
    }

    return curr
}


repeat(100, (c) => {
    console.log(`${c} --> ${fastFibo(c)}`)
});