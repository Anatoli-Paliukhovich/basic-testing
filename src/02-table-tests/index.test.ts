// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  { a: 99, b: 2, action: Action.Subtract, expected: 97 },
  { a: 6, b: 3, action: Action.Divide, expected: 2 },
  { a: 5, b: 4, action: Action.Exponentiate, expected: 625 },
];
const invalidTestCases = [
  { a: 3, b: 4, action: 'invalid' },
  { a: '3', b: 4, action: Action.Add },
  { a: 3, b: '4', action: Action.Add },
];
describe('simpleCalculator', () => {
  test.each(testCases)(
    'should return expected result for valid arguments',
    ({ a, b, action, expected }) => {
      expect(simpleCalculator({ a, b, action })).toBe(expected);
    },
  );
  test.each(invalidTestCases)(
    'should return null result for invalid arguments',
    ({ a, b, action }) => {
      expect(simpleCalculator({ a, b, action })).toBeNull();
    },
  );
});
