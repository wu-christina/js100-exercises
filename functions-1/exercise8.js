function greet(langCode) {
  if (langCode === 'en') return 'Hello';
  else if (langCode === 'fr') return 'Salut!';
  else if (langCode === 'pt') return 'Olá!';
  else if (langCode === 'de') return 'Hallo!';
  else if (langCode === 'sv') return 'Hej!';
  else if (langCode === 'af') return 'Haai!';
}



console.log(greet('en')); // 'Hi!'
console.log(greet('fr')); // 'Salut!'
console.log(greet('pt')); // 'Olá!'
console.log(greet('de')); // 'Hallo!'
console.log(greet('sv')); // 'Hej!'
console.log(greet('af')); // 'Haai!'