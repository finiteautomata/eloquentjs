class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  // Your code here.
  for(;;) {
    try {
        let result = primitiveMultiply(a, b);
        return result;
    }
    catch (e) {
        // Do nothing, just retry
    }
  }
}

console.log(reliableMultiply(8, 8));
// → 64