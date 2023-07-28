function greet(langCode) {
  if (langCode === 'en') return 'Hello';
  else if (langCode === 'fr') return 'Salut!';
  else if (langCode === 'pt') return 'Olá!';
  else if (langCode === 'de') return 'Hallo!';
  else if (langCode === 'sv') return 'Hej!';
  else if (langCode === 'af') return 'Haai!';
}

function extractLanguage(locale) {
  return locale.substring(0,2);
}

function extractRegion(locale) {
  return locale.substring(3, 5);
}

function localGreet(locale) {
  let language = extractLanguage(locale);
  let region = extractRegion(locale);
  
  switch(region) {
    case 'US': return 'Hey!';
    case 'GB': return 'Hello!';
    case 'AU': return 'Howdy!';
    default: return greet(language);
  }
}


console.log(localGreet('en_US.UTF-8')); // 'Hey!'
console.log(localGreet('en_GB.UTF-8')); // 'Hello!'
console.log(localGreet('en_AU.UTF-8')); // 'Howdy!'

console.log(localGreet('fr_FR.UTF-8')); // 'Salut!'
console.log(localGreet('fr_CA.UTF-8')); // 'Salut!'
console.log(localGreet('fr_MA.UTF-8')); // 'Salut!'