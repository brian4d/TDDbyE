// // import Model from 'ember-data/model';
// // import attr from 'ember-data/attr';
// // import { belongsTo, hasMany } from 'ember-data/relationships';
//
import Ember from 'ember';

var Dollar = Ember.Object.extend({
	amount: 0,
	times(multiplier) {
		let amount = this.get('amount');
		// this.set('amount', amount * multiplier);
		let result = amount * multiplier;
		return Dollar.create({ amount: result });
	}
});

export default Dollar;