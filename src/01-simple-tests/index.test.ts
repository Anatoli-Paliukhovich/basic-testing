// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    expect(simpleCalculator({ a: 3, b: 2, action: Action.Add })).toBe(5);
  });

  test('should subtract two numbers', () => {
    expect(simpleCalculator({ a: 99, b: 2, action: Action.Subtract })).toBe(97);
  });

  test('should multiply two numbers', () => {
    expect(simpleCalculator({ a: 12, b: 5, action: Action.Multiply })).toBe(60);
  });

  test('should divide two numbers', () => {
    expect(simpleCalculator({ a: 6, b: 3, action: Action.Divide })).toBe(2);
  });

  test('should exponentiate two numbers', () => {
    expect(simpleCalculator({ a: 5, b: 4, action: Action.Exponentiate })).toBe(
      625,
    );
  });

  test('should return null for invalid action', () => {
    expect(simpleCalculator({ a: 3, b: 4, action: 'invalid' })).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    expect(simpleCalculator({ a: '3', b: 4, action: Action.Add })).toBeNull();
    expect(simpleCalculator({ a: 3, b: '4', action: Action.Add })).toBeNull();
  });
});
