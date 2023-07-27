let animal = 'horse';

switch (animal) {
  case 'duck':
    console.log('quack');
  case 'squirrel':
    console.log('nook nook');
  case 'horse':
    console.log('neigh');
  case 'bird':
    console.log('tweet tweet');
  default:
    console.log('*cricket*');
}

/*

'neigh'
'tweet tweet'
'cricket'

** It will log the above because there is no break statement in the 'horse' case
** to stop the code from going to the next case. Since the next case also
** does not have a break statement, the code will continue on until a break statement
** is met or the end of the switch statement is reached.

*/