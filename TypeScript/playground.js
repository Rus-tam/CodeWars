function playground(str) {
  return str
    .split(' ')
    .map((item) => item.length)
    .sort()[0];
}

console.log(playground('Hello world'));
