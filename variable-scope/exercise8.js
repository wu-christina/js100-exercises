let a = 1;

function myFunction(a) {
  console.log(a);
}

let b = 2;

myFunction(b);

/**
 * It will log 2.
 * In line 3, a is a parameter that shadows the variable a on line 1.
 * So, a in line 4 will be the value of the argument that we pass to the function.
 * In the case above, the value of variable b, 2, is passed as an argument
 * to myFunction.
 */