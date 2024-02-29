var assert = require('assert');

//declarando uma função ordinária

//tem parâmetros a e b
function add1(a, b){
    return a + b;
}

//chamando a função
assert.equal( add1(5, 2), 7);

//arrow functions
/* são usadas especialmente como argumentos 
de chamadas a funções e chamadas a métodos.
*/

//arrow function que o corpo é um bloco de código
const add2 = (a, b) => { return a + b; };

assert.equal( add2(5, 3), 8);

//arrow function que o corpo é uma expressão
const add3 = (a, b) => a + b;

