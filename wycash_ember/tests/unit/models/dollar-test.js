import { moduleFor, test } from 'ember-qunit';

moduleFor('model:dollar', 'Unit | dollar', {
  // Specify the other units that are required for this test.
	//   needs: [],
	unit: true
});

test('it multiplies', function(assert) {
	const five = this.subject({amount: 5});
	let product = five.times(2);
	assert.equal(product.amount, 10);
	product = five.times(3);
	assert.equal(product.amount, 15);
});

test('equality', function(assert) {
	assert.expect(4);
	const one = this.subject({amount: 5});
	const two = this.subject({amount: 5});
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
