var assert = require('assert');

function throwsException() {
    throw new Error('Problema!');
}

function catchesException() {
    try {
        throwsException();
    } catch (err) {
        assert.ok(err instanceof Error);
        assert.equal(err.message, 'Problema!');
    }
}

