const minimumSteps = require('./minimumSteps');

describe('TEST FOR MINIMUM STEPS', () => {
  test('a simple case where there is no stairs ', () => {
    expect(minimumSteps([], 3)).toBe(`Finished with 0 step`)
  });
  test('a simple case where Ethan can cover the stairs', () => {
    expect(minimumSteps([1,1,1,1,1,0,1,0,1,0,1,1,0,1], 3)).toBe(`Finished with 5 steps`)
  });
  test('a case where Ethan can not start climbing the stairs', () => {
    expect(minimumSteps([0,1,1,1,1,0,1,0,1,0,1,1,0,1], 3)).toBe(`Stopped at position 0 with 0 step`)
  });
  test('a simple case where the stairs are all black and shorter than the pace', () => {
    expect(minimumSteps([1,1], 3)).toBe(`Finished with 1 step`)
  });
  test('a simple case where the stairs are all black and equal to the pace', () => {
    expect(minimumSteps([1,1,1,1,], 3)).toBe(`Finished with 1 step`)
  });
  test('a simple case of two obstacles', () => {
    expect(minimumSteps([1,1,1,0,1,0,1], 3)).toBe(`Finished with 3 steps`)
  });
  test('a simple case where the pace is greater than the stairs but the second floor is white', () => {
    expect(minimumSteps([1,1,1,1,1,0,1,0], 10)).toBe(`Stopped at position 6 with 1 step`)
  });
  test('a simple case of one obstacle and second floor is black', () => {
    expect(minimumSteps([1,1,1,1,1,0,1,0,1,0,1,1,0,1], 7)).toBe(`Finished with 2 steps`)
  });
  test('a simple case of pace larger than stairs and second floor is white', () => {
    expect(minimumSteps([1,1,1,1,1,0,1,0], 14)).toBe(`Stopped at position 6 with 1 step`)
  });
});

