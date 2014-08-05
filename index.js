(function(root) {

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