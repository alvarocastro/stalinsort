const test = require('ava');
const {
	comparatorAscending,
	comparatorDescending
} = require('./utils');
const sort = require('.');

test('Should sort an array', t => {
	const cases = [
		[[1, 2, 5, 3, 5, 7], [1, 2, 5, 5, 7]],
		[[5, 4, 3, 2, 1], [5]],
		[[1, 1], [1, 1]],
		[[2, 2, 2], [2, 2, 2]],
		[[1, 2, 5, 3, 4, 7], [1, 2, 5, 7]],
		[['a', 'c', 'b'], ['a', 'c']]
	];

	for (const [value, expected] of cases) {
		t.deepEqual(sort(value), expected);
	}
});

test('Should work with an array of one element', t => {
	t.deepEqual(sort([2]), [2]);
});

test('Should work with an empty array', t => {
	t.deepEqual(sort([]), []);
});

test('Should support a custom comparator', t => {
	const value = [7, 5, 3, 5, 2, 1];
	const expected = [7, 5, 3, 2, 1];

	t.deepEqual(sort(value, comparatorDescending), expected);
});

test('Should throw an error if first param is not an array', t => {
	const error = t.throws(() => {
		sort('');
	}, {instanceOf: TypeError});

	t.is(error.message, 'Sortable list must be an array');
});

test('Should throw an error if second param is not a function', t => {
	const error = t.throws(() => {
		sort([], '');
	}, {instanceOf: TypeError});

	t.is(error.message, 'Comparator must be a function');
});

test('Ascending comparator should return -1 when first value is smaller', t => {
	t.true(comparatorAscending(1, 2) === -1);
});

test('Ascending comparator should return 1 when first value is greater', t => {
	t.true(comparatorAscending(2, 1) === 1);
});

test('Ascending comparator should return 0 when values are equal', t => {
	t.true(comparatorAscending(1, 1) === 0);
});

test('Descending comparator should return 1 when first value is smaller', t => {
	t.true(comparatorDescending(2, 1) === -1);
});

test('Descending comparator should return -1 when first value is greater', t => {
	t.true(comparatorDescending(1, 2) === 1);
});

test('Descending comparator should return 0 when values are equal', t => {
	t.true(comparatorDescending(1, 1) === 0);
});
