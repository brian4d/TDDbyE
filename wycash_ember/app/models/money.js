import Ember from 'ember';

let Money = Ember.Object.extend({
	amount: 0,
	// times(multiplier) {
	// 	let my_amount = this.amount;
	// 	let result = my_amount * multiplier;
	// 	return Franc.create({ amount: result });
	// },
	equals(obj) {
		let my_amount = this.amount;
		return my_amount===obj.amount;
	}
});

export default Money;