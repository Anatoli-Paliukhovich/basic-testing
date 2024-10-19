// Uncomment the code below and write your tests
import { generateLinkedList } from './index';

describe('generateLinkedList', () => {
  // Check match by expect(...).toStrictEqual(...)
  test('should generate linked list from values 1', () => {
    const inputValue = [1, 2, 3];
    const expectedValue = {
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: {
            next: null,
            value: null,
          },
        },
      },
    };
    const linkedList = generateLinkedList(inputValue);
    expect(linkedList).toStrictEqual(expectedValue);
  });

  // Check match by comparison with snapshot
  test('should generate linked list from values 2', () => {
    const linkedList = generateLinkedList([2, 4, 6]);

    expect(linkedList).toMatchSnapshot();
  });
});
