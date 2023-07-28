function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
    let a = 2;
    console.log(a);
  }
}

myFunction();

/** 
 * It will produce an error. In line 5, we are attempting to use variable a
 * before it is created.
 */