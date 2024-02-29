//import test from 'node:test'
//import assert from 'node:assert'  //não funcionou fora de módulo

var assert = require('assert');

//booleans
let a = assert.equal(true && false, false);
assert.equal(true || false, true);

//numeros
assert.equal(3 + 4, 7);
assert.equal(5 - 1, 4);
assert.equal(3 * 4, 12);
assert.equal(10 / 4, 2.5);

//bigint
assert.equal(3n + 4n, 7n);
assert.equal(5n - 1n, 4n);
assert.equal(3n * 4n, 12n);
assert.equal(10n / 4n, 2n);

//string
assert.equal('a' + 'b', 'ab');
assert.equal('I see '+ 3 +' monkeys', 'I see 3 monkeys');

//comparadores
assert.equal(3 < 4, true);
assert.equal(3 <= 4, true);
assert.equal('abc' === 'abc', true);
assert.equal('abc' !== 'def', true);