import map from '../src/basicFunctions/map';
import filter from '../src/basicFunctions/filter';
import reduce from '../src/basicFunctions/reduce';
import zip from '../src/basicFunctions/zip';
import groupBy from '../src/basicFunctions/groupBy';

test('method creates a new array with the results of calling a provided function on every element in this array', () => {
  const func = item => item * 10;
  const arr1 = [];
  const arr2 = [0, 1, 2, 3, 4, 5];
  expect(map(arr1, func)).toEqual([]);
  expect(map(arr2, func)).toEqual([0, 10, 20, 30, 40, 50]);
});

test('method creates a new array with all elements that pass the test implemented by the provided function', () => {
  const func = item => item % 2 === 1;
  const arr1 = [];
  const arr2 = [0, 1, 2, 3, 4, 5];
  expect(filter(arr1, func)).toEqual([]);
  expect(filter(arr2, func)).toEqual([1, 3, 5]);
});

test('method applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value', () => {
  const func = (acc, item) => acc + item;
  const arr1 = [];
  const arr2 = [0, 1, 2, 3, 4, 5];
  expect(reduce(0, arr1, func)).toBe(0);
  expect(reduce(0, arr2, func)).toBe(15);
});

test('method creates a new list out of the two supplied by pairing up equally-positioned items from both lists. The returned list is truncated to the length of the shorter of the two input lists.', () => {
  const arr1 = [0, 1, 2, 3, 4, 5];
  const arr2 = [0, 1, 2, 3, 4];
  const arr3 = [0, 1, 2, 3];
  expect(zip(arr1, arr2, arr3)).toEqual([[0, 0, 0], [1, 1, 1], [2, 2, 2], [3, 3, 3]]);
  expect(zip()).toEqual([]);
});

test('splits a list into sub-lists stored in an object, based on the result of calling a String-returning function on each element, and grouping the results according to values returned.', () => {
  const arr = [];
  const func = elem => elem[0];
  expect(groupBy(arr, func)).toEqual({});
});

test('splits a list into sub-lists stored in an object, based on the result of calling a String-returning function on each element, and grouping the results according to values returned.', () => {
  const arr = ['aaa', 'aa', 'bbbb', 'ttttt'];
  const func = elem => elem[0];
  expect(groupBy(arr, func)).toEqual({ a: ['aaa', 'aa'], b: ['bbbb'], t: ['ttttt'] });
});
