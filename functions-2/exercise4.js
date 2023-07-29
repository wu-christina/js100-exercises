function calculateBMI(heightInCentimeters, weightInKg) {
  let heightInMeters = heightInCentimeters / 100;
  return ((weightInKg / heightInMeters**2).toFixed(2));
}

console.log(calculateBMI(180, 80));