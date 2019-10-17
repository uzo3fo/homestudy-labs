const binarySearch = require('./binarySearchSolution');

test('Testing the index property when the element is in the array', () => {
  "use strict";
  expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)['index']).toBe(2);
});

test('Testing the lower limit for the number of iterations', () => {
  "use strict";
  expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22], 3)['count']).toBeLessThanOrEqual(4);
});

test('Testing the upper limit for the number of iterations', () => {
  "use strict";
  expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22], 3)['count']).toBeGreaterThanOrEqual(3);
});

test('Testing the index property when the number is not in the array', () => {
  "use strict";
  expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 20)['index']).toBe(-1);
});

test('Testing the response when the array is empty', () => {
  "use strict";
  const response = binarySearch([], 20);
  expect(response['index']).toBe(-1);
  expect(response['count']).toBe(0);
});
