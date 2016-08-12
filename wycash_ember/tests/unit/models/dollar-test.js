import { moduleFor, test } from 'ember-qunit';
// import Ember from 'ember';
import Dollar from '../../../models/dollar';
import Franc from '../../../models/franc';


moduleFor('model:dollar', 'Unit | dollar', {
  // Specify the other units that are required for this test.
	//needs: [],
  unit: true
});

test('it multiplies dollars', function(assert) {
	//const five = this.subject({amount: 5});
	var five = Dollar.create({amount: 5});
	
	// This doesn't work, can't override JS equality operator
	// assert.equal(five.times(2), Dollar.create({amount: 10}));
	
	// Instead use QUnit's deepEqual()
	assert.deepEqual(five.times(2), Dollar.create({ amount: 10 }));
	assert.deepEqual(five.times(3), Dollar.create({ amount: 15 }));
});

test('it multiplies francs', function(assert) {
	var six = Franc.create({amount: 5});

	assert.deepEqual(six.times(2), Franc.create({ amount: 10 }));
	assert.deepEqual(six.times(3), Franc.create({ amount: 15 }));
});

test('equality', function(assert) {
	assert.expect(4);
	let one = Dollar.create({amount: 5});
	let two = Dollar.create({amount: 5});
	let three = Dollar.create({ amount: 6});
	assert.equal(one.amount, 5);
	assert.equal(three.amount, 6);
	
	assert.ok(one.equals(two));
	assert.notOk(one.equals(three));
});

test('it exists', function(assert) {
  let model = this.subject();
  assert.ok(!!model);
});
