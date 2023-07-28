let a = 5;
let b = false;

if (a > 4) {
  let b = true;
}

console.log(b);

/**
 * It will log false.
 * Varaible b in line 2 and line 5 are two different variables with the same name.
 * Variable b in line 2 is declared globally.
 * Variable b in line 5 is local variable within the if statement.
 * Line 8 is calling variable b in line 2 because it is on the global level too.
 */