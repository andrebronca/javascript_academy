var assert = require('assert');

//criando um objeto plano via objeto literal
const obj = {
    first: 'Jane',      //property
    last: 'Doe',        //property
    getFullName() {     //property (method)
        return this.first +' '+ this.last;
    },
};

//obtendo o valor da propriedade
assert.equal( obj.first, 'Jane');
//mudando o valor da propriedade
obj.first = 'Janey';
//chamando o método
assert.equal(obj.getFullName(), 'Janey Doe');

//criando um array via array literal
const arr = ['a', 'b', 'c'];
assert.equal(arr.length, 3);

//obtendo um elemento
assert.equal(arr[1], 'b');

//alterando o valor de um elemento
arr[1] = 'w';

//adicionando um elemento para um array
arr.push('d');

assert.deepEqual(arr, ['a','w','c','d']);