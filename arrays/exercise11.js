let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

for (let i = groceryList.length; i > 0; i -= 1) {
  console.log(groceryList[0]);
  groceryList.splice(0, 1);
}

console.log(groceryList);