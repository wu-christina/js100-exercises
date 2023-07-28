const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a);

/**
 * It will log { firstName = 'Jane', lastName = 'Doe' }.
 * While we cannot change what object that variable refers to, we can modify
 * the object's properties and property values.
 */