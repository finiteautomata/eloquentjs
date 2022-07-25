function fastFibo(n){
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


for (let c = 0; c < 15; c+=1) {
    console.log(c);
    console.log(fastFibo(c))
    console.log("============")
}