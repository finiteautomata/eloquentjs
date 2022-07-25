function fizzbuzz(n) {
    if (n % 15 == 0) return "Fizzbuzz";
    else if (n % 3 == 0) return "Fizz";
    else if (n % 5 == 0) return "Buzz";
    else return n;
}

for (let i = 1; i <= 100; ++i) {
    console.log(i, " --> ", fizzbuzz(i));
}