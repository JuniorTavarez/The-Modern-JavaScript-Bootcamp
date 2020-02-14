const todos = ['work', 'program', 'gym', 'walk the dog', 'eat'];
console.log(todos);

todos.splice(2, 1);
todos.push('Make Money');
todos.shift();
console.log(`you have ${todos.length} todos left`);
console.log(todos);
