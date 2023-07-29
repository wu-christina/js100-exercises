function catAge(humanYears) {
  let firstYear = 15;
  let secondYear = 9;
  let allOtherYears = 4;
  let calculatedYears = 0;
  
  if (humanYears === 0) {
    return 0;
  } else if (humanYears === 1) {
    return firstYear;
  } else if (humanYears === 2) {
    return firstYear + secondYear;
  } else {
    calculatedYears = firstYear + secondYear;
    for (let i = 2; i < humanYears; i++) {
      calculatedYears += allOtherYears;
    }
    return calculatedYears;
  }
}

console.log(catAge(0)); // 0
console.log(catAge(1)); // 15
console.log(catAge(2)); // 24
console.log(catAge(3)); // 28
console.log(catAge(4)); // 32