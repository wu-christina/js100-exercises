/*
** What are the return values of the statements on lines 8 to 10? Refer to the 
** MDN documentation about the Array object for help.
*/

let trees = ['birch', 'pine', 'sequoia', 'palm tree'];

trees[trees.length - 1];  // 'palm tree'
trees.pop();              // 'palm tree'
trees[trees.length - 1];  // 'sequoia'