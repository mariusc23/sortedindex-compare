(function(root) {

	/**
	 * Uses a binary search to determine the smallest index at which a value
	 * should be inserted into a given sorted array in order to maintain the sort
	 * order of the array. The sort ranking is calculated internally by comparing
	 * an element of the array with the given value. The compare function should return
	 * a positive number larger than 0 if the second argument has a higher sort ranking than first,
	 * 0 if the first and the second argument have the same sort raking,
	 * and a negative number if the the second argument has a smaller sort ranking than the first.
	 *
	 * @static
	 * @memberOf _
	 * @category Arrays
	 * @param {Array} array The array to inspect.
	 * @param {*} value The value to evaluate.
	 * @param {Function} [compare] The function to compare elements.
	 	Received to arguments that it should return a number for as described above.
	 * @returns {number} Returns the index at which `value` should be inserted
	 *  into `array`.
	 */

	function sortedIndex(array, value, compare) {
	  var low = 0,
	      high = array ? array.length : low;

	  while (low < high) {
	    var mid = (low + high) >>> 1;
	    (compare(array[mid],value) > 0)
	      ? low = mid + 1
	      : high = mid;
	  }
	  return low;
	}

	//export for amd, commonjs and traditional global scope
	if (typeof define === 'function' && define.amd) {
		define('sortedindex-compare', [], function() {
			return sortedIndex;
		});
	}
	else if (typeof exports !== 'undefined') {
		if (typeof module !== 'undefined' && module.exports) {
			exports = module.exports = sortedIndex;
		}
		exports.sortedIndex = sortedIndex;
	}
	else {
		root.sortedIndex = sortedIndex;
	}

})(this);