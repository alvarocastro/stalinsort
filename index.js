const {comparatorAscending} = require('./utils');

const stalinsort = function (arr, compare = comparatorAscending) {
	if (!Array.isArray(arr)) {
		throw new TypeError('Sortable list must be an array');
	}

	if (typeof compare !== 'function') {
		throw new TypeError('Comparator must be a function');
	}

	const l = arr.length;

	if (l < 2) {
		return arr;
	}

	let pivot = arr[0];
	const res = [pivot];

	for (let i = 1; i < l; i++) {
		const r = compare(pivot, arr[i]);
		if (r <= 0) {
			pivot = arr[i];
			res.push(pivot);
		}
	}

	return res;
};

module.exports = stalinsort;
