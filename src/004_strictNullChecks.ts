
// if "strictNullChecks": true, then null and undefined are only assignable to
// any

// this greet would only work if strictNullChecks": false
function greetSimple(name: string): string {
      return `Hello, ${name}!`;
}

// this greet works even with strictNullChecks": true
function greetElaborated(name: string | null): string {
  if (name === null) {
      return "Hello, Guest!";
  } else {
      return `Hello, ${name}!`;
  }
}

console.log(greetSimple("Alice")); // Output: Hello, Alice!
console.log(greetSimple(null)); // Output: Hello, Guest!
console.log(greetElaborated("Alice")); // Output: Hello, Alice!
console.log(greetElaborated(null)); // Output: Hello, Guest!