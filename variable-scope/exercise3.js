if (true) {
  let myValue = 20;
}

console.log(myValue);

/**
 * It will log an error. 
 * Variables declared by let are block-scoped.
 * This means it's only avaialble in the block in which they are declared in.
 * myValue is declared in an if statement, which means it's only accessible
 * inside that block.
 */