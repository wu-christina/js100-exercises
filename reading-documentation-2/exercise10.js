/*

let tweet = 'Woohoo! :-)';

if (tweet.length() > 140) {
  console.log('Tweet is too long!');
}

** The code above runs in the an error because length is a property of an Array 
** instance and is not a method. See below for corrected code.

*/

let tweet = 'Woohoo! :-)';

if (tweet.length > 140) {
  console.log('Tweet is too long!');
}
