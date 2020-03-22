const {comparatorAscending} = require('./utils');

const stalinsort = function (array, compare = comparatorAscending) {
	if (!Array.isArray(array)) {
		throw new TypeError('Sortable list must be an array');
	}

	if (typeof compare !== 'function') {
		throw new TypeError('Comparator must be a function');
	}

	const l = array.length;

	if (l < 2) {
		return array;
	}

	let pivot = array[0];
	const result = [pivot];

	for (let i = 1; i < l; i++) {
		const r = compare(pivot, array[i]);
		if (r <= 0) {
			pivot = array[i];
			result.push(pivot);
		}
	}

	return result;
};

module.exports = stalinsort;
