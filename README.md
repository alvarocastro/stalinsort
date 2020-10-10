# Stalinsort

[![NPM](https://img.shields.io/npm/v/@alvarocastro/stalinsort)](https://www.npmjs.com/package/@alvarocastro/stalinsort)
[![Build status](https://img.shields.io/github/workflow/status/alvarocastro/stalinsort/build)](https://github.com/alvarocastro/stalinsort/actions?query=workflow%3Abuild)
[![Maintainability status](https://img.shields.io/codeclimate/maintainability/alvarocastro/stalinsort)](https://codeclimate.com/github/alvarocastro/stalinsort/maintainability)
[![Coverage status](https://img.shields.io/coveralls/github/alvarocastro/stalinsort)](https://coveralls.io/github/alvarocastro/stalinsort?branch=master)
[![Bundle size](https://img.shields.io/bundlephobia/min/@alvarocastro/stalinsort)](https://bundlephobia.com/result?p=@alvarocastro/stalinsort)
[![Code style: XO](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)
[![Release: Semantic](https://img.shields.io/badge/%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

Yet another implementation of stalinsort in JavaScript. Inspired by [this post](https://www.reddit.com/r/ProgrammerHumor/comments/9s9kgn/nononsense_sorting_algorithm/) in [r/ProgrammerHumor](https://www.reddit.com/r/ProgrammerHumor).

- [Install](#install)
- [Usage](#usage)
- [Performance](#performance)
- [More examples](#more-examples)
- [Contributing](#contributing)
- [Support](#support)

## Install

```bash
npm install @alvarocastro/stalinsort
```

## Usage

```js
const sort = require('@alvarocastro/stalinsort');

const elements = [1, 2, 5, 3, 5, 4, 7, 6];
sort(elements);
// => [1, 2, 5, 5, 7]
```

### sort(elements[, compare])

Returns a new sorted array based on the `compare` function criteria.

#### elements

Type: `Array`

List of elements to sort.

#### compare

Type: `Function`<br>
Default: [comparatorAscending](utils.js#L2)

The function to use to compare two elements and find their sorting order.
The expected return of the function is:
* `-1` to sort the element to the left.
* `1` to sort the element to the right.
* `0` when the elements are the same, no sorting is made.

A descending function is also provided in [utils.js](utils.js).

## More examples

### Reverse order

```js
const sort = require('@alvarocastro/stalinsort');
const {comparatorDescending} = require('@alvarocastro/stalinsort/utils');

const elements = [6, 7, 4, 5, 3, 5, 2, 1];
sort(elements, comparatorDescending);
// => [6, 4, 3, 2, 1]
```

### Custom elements

```js
const sort = require('@alvarocastro/stalinsort');

const elements = [
	{name: 'Kyle Reese', firstAppearance: 'The Terminator'},
	{name: 'Sarah Connor', firstAppearance: 'The Terminator'},
	{name: 'John Connor', firstAppearance: 'Terminator 2: Judgement Day'},
	{name: 'T-800', firstAppearance: 'The Terminator'},
	{name: 'T-1000', firstAppearance: 'Terminator 2: Judgement Day'}
];
const comparator = function (a, b) {
	if (a.name < b.name) {
		return -1;
	} else if (a.name > b.name) {
		return 1;
	}
	return 0;
};
sort(elements, comparator);
// => [
// {name: 'Kyle Reese', firstAppearance: 'The Terminator'},
// {name: 'Sarah Connor', firstAppearance: 'The Terminator'},
// {name: 'T-800', firstAppearance: 'The Terminator'},
// ]
```

## Contributing

Contributions are always welcome! Please run `npm test` beforehand to ensure everything is ok.

## Support

If you use this package please consider starring it :)
