/*

let counter = 0;

while (counter > 0) {
  console.log('Woooot!');
  counter -= 1;
}

---

let counter = 0;

do {
  console.log('Woooot!');
  counter -= 1;
} while (counter > 0);

** The difference is in the first code block, nothing will log to the console because
** the while condition is never satisfied (0 is not greater than 0). Meanwhile,
** in the second code block, the do statement will run and log 'Woooot!' to the console
** and decrement the counter by 1. The while statement after will never be satisfied
** because -1 is not greater than 0, ending the loop.
** The do/while executes the statement first until the test condition is false.
*/