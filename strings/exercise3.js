function repeat(numberOfRepeat, string) {
  let finalString = '';
  for (i = 1; i <= numberOfRepeat; i += 1) {
    finalString += string;
  }
  return finalString;
}

console.log(repeat(3, 'ha')); // 'hahaha'