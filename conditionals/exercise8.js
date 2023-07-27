if (true && false) {
  console.log('Yes!');
} else {
  console.log('No...');
}

/**
 * It will log 'No' because the condition is falsy.
 * True is a truthy value and false is a falsy value.
 * && operator requires both operands to be truthy to return a truthy value.
 * Since only one operand is truthy, the condition returns a falsy value.
 */