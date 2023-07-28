let string = 'launch school tech & talk';

// change string to array with a space as a delimiter
// capitalize first character in each word
// change array back to string

let capitalizedString = string.split(' ')
                      .map(word => word.substring(0,1).toUpperCase().concat(word.substring(1)))
                      .join(' ');
     
      
console.log(capitalizedString);