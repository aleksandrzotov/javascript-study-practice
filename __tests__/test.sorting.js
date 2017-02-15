import bubbleSort from '../src/sorting/bubbleSort';
import selectionSort from '../src/sorting/selectionSort';

test('sorting array by bubble sort', () => {
  expect(bubbleSort([2, 3, 6, 9, 0, 1, 4, 3, 1, -1])).toEqual([-1, 0, 1, 1, 2, 3, 3, 4, 6, 9]);
});

test('sorting array by selection sort', () => {
  expect(selectionSort([2, 3, 6, 9, 0, 1, 4, 3, 1, -1])).toEqual([-1, 0, 1, 1, 2, 3, 3, 4, 6, 9]);
});
