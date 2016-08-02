import { moduleFor, test } from 'ember-qunit';

moduleFor('model:dollar', 'Unit | dollar', {
  // Specify the other units that are required for this test.
	//   needs: [],
	unit: true
});

test('it multiplies', function(assert) {
	const five = this.subject({amount: 5});
	
	// This doesn't work, can't override JS equality operator
	// assert.equal(five.times(2), this.subject().constructor.create({amount: 10}));
	
	// Instead use QUnit's deepEqual()
	assert.deepEqual(five.times(2), this.subject().constructor.create({ amount: 10 }));
	assert.deepEqual(five.times(3), this.subject().constructor.create({ amount: 15 }));
});

test('equality', function(assert) {
	assert.expect(4);
	const one = this.subject({amount: 5});
	const two = this.subject().constructor.create({amount: 5});
	const three = this.subject().constructor.create({ amount: 6});
	assert.equal(one.amount, 5);
	assert.equal(three.amount, 6);
	
	assert.ok(one.equals(two));
	assert.notOk(one.equals(three));
});

test('it exists', function(assert) {
  let model = this.subject();
  assert.ok(!!model);
});
