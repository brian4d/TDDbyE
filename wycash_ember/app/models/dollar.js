// // import Model from 'ember-data/model';
// // import attr from 'ember-data/attr';
// // import { belongsTo, hasMany } from 'ember-data/relationships';
//
import Ember from 'ember';

const Dollar = Ember.Object.extend({
	amount: 0,
	times(multiplier) {
		let my_amount = this.amount;
		let result = my_amount * multiplier;
		return Dollar.create({ amount: result });
	},
	equals(obj) {
		let my_amount = this.amount;
		return my_amount===obj.amount;
	}
});

export default Dollar;