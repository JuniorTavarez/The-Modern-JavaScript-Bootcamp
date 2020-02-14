const myBook = {
  title: '1984',
  author: 'George Orwell',
  pageCount: 336
};

console.log(myBook.title);

myBook.title = 'Baby Money';

console.log(myBook);

const person = {
  name: 'Junior',
  age: 31,
  location: 'North Carolina'
};

console.log(`${person.name} is ${person.age} and lives in ${person.location}`);

person.age++;

console.log(`${person.name} is ${person.age} and lives in ${person.location}`);
