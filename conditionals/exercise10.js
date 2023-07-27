let speed = 0;
let acceleration = 24;
let brakingForce = 19;

let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);

console.log(isMoving);

/**
 * It will log true.
 * First statement is evaluate is the one in between the parentheses.
 * Split this into two sections:
 *  
 * Section 1 - (speed > 0 || acceleration > 0)
 * speed > 0 is false
 * acceleation > 0 is true
 * false || true returns true
 * 
 * Section 2 - brakingForce < acceleration
 * brakingForce < acceleration is true
 * 
 * true && true is true
 * Parentheses is needed because && has a higher operator precedence than ||.
 */