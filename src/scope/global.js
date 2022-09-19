// Variables 

var a; //declarada
var b = "b"; // declaramos / asignamos
b == 'bb'; // reasignamos
var a = 'aa'; // receláramos

// Global Scope
var fruit = "Apple"; // global
console.log(fruit);

function bestFruit() {
  console.log(fruit);
}

bestFruit();

function countries() {
  country = "Colombia"; // global
  console.log(country);
}

countries();
console.log(country);