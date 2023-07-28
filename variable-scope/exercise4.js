function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
  }
}

myFunction();

/**
 * It will log 1.
 * Variables declared in an outer scope are accessible from all inner ones, so
 * variable a in line 5, which is in a block statement, is accessible because 
 * variable a was declared outside of that block statement in line 2.
 */