const assert = require('assert');
const { add, subtract } = require('./index');

// Test for add function
assert.strictEqual(add(2, 3), 5, 'Addition of 2 and 3 should be 5');
assert.strictEqual(add(-1, 1), 0, 'Addition of -1 and 1 should be 0');
assert.strictEqual(add(0, 0), 0, 'Addition of 0 and 0 should be 0');

// Test for subtract function
assert.strictEqual(subtract(5, 3), 2, 'Subtraction of 3 from 5 should be 2');
assert.strictEqual(subtract(0, 0), 0, 'Subtraction of 0 from 0 should be 0');
assert.strictEqual(subtract(-1, -1), 0, 'Subtraction of -1 from -1 should be 0');

console.log('All tests passed!');