// import Model from 'ember-data/model';
// // import attr from 'ember-data/attr';
// // import { belongsTo, hasMany } from 'ember-data/relationships';

//import Ember from 'ember';
import Money from './money';

let Dollar = Money.extend({
	times(multiplier) {
		let my_amount = this.amount;
		let result = my_amount * multiplier;
		return Dollar.create({ amount: result });
	},
});

export default Dollar;