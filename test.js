var sortedIndex = require('./index');

module.exports = {
	'test sortedIndex with only 1 dimension': function(test) {
		function compare(a, b) {
			return b - a;
		}

		var values = [1,8,10,50,51,53];
		var index;
		index = sortedIndex(values, 30, compare);
		test.strictEqual(index, 3, 'value added in the middle should be at index 3');

		index = sortedIndex(values, 0.5, compare);
		test.strictEqual(index, 0, 'value added in the beginning should be at index 0');


		index = sortedIndex(values, 100, compare);
		test.strictEqual(index, 6, 'value added in the end should be at index 6');

		index = sortedIndex(values, 51, compare);
		test.strictEqual(index, 4, 'value already present should inserted before present value');

		test.done();
	},

	'test sortedIndex with 2 dimensions': function(test) {
		function compare(a, b) {
			if(a.dim1 === b.dim1) {
				return b.dim2 - a.dim2;
			}
			return b.dim1 - a.dim1;
		}

		var values = [
			{dim1: 1, dim2: 10},
			{dim1: 2, dim2: 4},
			{dim1: 2, dim2: 5},
			{dim1: 2, dim2: 5},
			{dim1: 3, dim2: 2}
		];

		var index;
		index = sortedIndex(values, {dim1: 2, dim2: 6}, compare);
		test.strictEqual(index, 4, 'value added in the middle should be at index 4');

		index = sortedIndex(values, {dim1: 1, dim2: 1}, compare);
		test.strictEqual(index, 0, 'value added in the beginning should be at index 0');


		index = sortedIndex(values, {dim1: 3, dim2: 3}, compare);
		test.strictEqual(index, 5, 'value added in the end should be at index 6');

		index = sortedIndex(values, {dim1: 2, dim2: 5}, compare);
		test.strictEqual(index, 2, 'value already present should inserted before present value');

		test.done();
	},

	'test copying items over to a new array': function(test) {
		function compare(a, b) {
			return b - a;
		}

		var values = [5,80,9,4,52,500,1,5,61,7];
		var expectedValues = [1,4,5,5,7,9,52,61,80,500];
		var newValues = [];

		values.forEach(function(value) {
			var index = sortedIndex(newValues, value, compare);
			newValues.splice(index, 0, value);
		});

		test.deepEqual(newValues, expectedValues, 'values should be sorted ascendingly');

		test.done();
	}
};