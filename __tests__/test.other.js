import detTimeAngle from '../src/other/detTimeAngle';

test('this function calculates an angle between the hands clock at the indicated time', () => {
  expect(detTimeAngle(10, 47)).toBe(41.5);
  expect(detTimeAngle(23, 23)).toBe(203.5);
});
