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

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
