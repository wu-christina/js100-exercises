let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }

let object = {};

for (let i = 0; i < nestedArray.length; i += 1) {
    let key = nestedArray[i][0];
    let value = nestedArray[i][1];
    object[key] = value;
}

console.log(object);