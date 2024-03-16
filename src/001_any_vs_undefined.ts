
let param: string = "this is a string";
let num: number = 12;

// Instead of
function unsafeFunction(param: any): any {
  console.log(param);
}

// Try
function saferFunction(param: unknown): void {
  if (typeof param === "string") {
    console.log(param);
  }
  console.log(param)
}

unsafeFunction(param)
unsafeFunction(num)
saferFunction(param)
saferFunction(num)