function foo(a) {
  if (a === null || typeof a !== 'number') {
    return 'Invalid input: Please provide a number.';
  }
  return a + 10;
}

console.log(foo(5)); // Output: 15
console.log(foo(null)); // Output: Invalid input: Please provide a number.