# sortedIndex-compare

A fork of underscore/lodash.sortedIndex to use a comparison function instead of a ranking function.

## Example usage
```javascript
function compare(a, b) {
	return b-a;
}
var values = [1,5,10];
var index = sortedIndex(values, 6, compare); //index is 2
```

See test.js for all use cases and index.js for jsdoc. The thisArg argument is not supported in this fork.