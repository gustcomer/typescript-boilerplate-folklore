const result: string[] = [];

function removeDuplicatedChars(input: string): string {
  let seen: Set<string> = new Set();
  for (let c of input) {
    if (!seen.has(c)){
      seen.add(c);
      result.push(c);
    }
  }
  return [...seen].toString();
}

let s = "aaabbcdeeabwz"

console.log(removeDuplicatedChars(s));
