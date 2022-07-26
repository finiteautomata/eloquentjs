
function sum(a, b) {
    return a + b;
  }

test("Adds correctly", () => {
    expect(sum(1, 2)).toBe(3);
})