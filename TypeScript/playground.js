function playground(str) {
  return str
    .split(' ')
    .map((item) => item.length)
    .sort();
}

console.log(playground('lets talk about javascript the best language'));
