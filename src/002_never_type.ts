
function removeDuplicatedChars(input: string): string {
  const result: string[] = [];
  //const result = [];
  let seen: Set<string> = new Set();
  for (let c of input) {
    if (!seen.has(c)){
      seen.add(c);
      result.push(c);
    }
  }
  return [...result].toString();
}

let s = "aaabbcdeeabwz"

console.log(removeDuplicatedChars(s));
