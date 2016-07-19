// // import Model from 'ember-data/model';
// // import attr from 'ember-data/attr';
// // import { belongsTo, hasMany } from 'ember-data/relationships';
//
// var Dollar = Ember.Object.extend({
// 	amount: 0;
// 	times(multiplier) {
// 		this.set(amount, amount * 2);
// 	}
//
// });
//
// // export default Model.extend({
// // 	amount: attr('number');
// // });
// export default Dollar;

import Ember from 'ember';

export default Ember.Object.extend({
	amount: 0,
	times(multiplier) {
		let amount = this.get('amount');
		this.set('amount', amount * multiplier);
	}
});