// Uncomment the code below and write your tests
import { mockOne, mockTwo, mockThree, unmockedFunction } from './index';

jest.mock('./index', () => {
  const originalModule =
    jest.requireActual<typeof import('./index')>('./index');

  return {
    ...originalModule,
    mockOne: jest.fn(() => 'foo'),
    mockTwo: jest.fn(() => 'bar'),
    mockThree: jest.fn(() => 'baz'),
  };
});

describe('partial mocking', () => {
  afterAll(() => {
    jest.unmock('./index');
  });

  test('mockOne, mockTwo, mockThree should not log into console', () => {
    mockOne();
    mockTwo();
    mockThree();

    const spyLog = jest.spyOn(console, 'log');

    expect(spyLog).not.toContainEqual('foo');
    expect(spyLog).not.toContainEqual('bar');
    expect(spyLog).not.toContainEqual('baz');
  });

  test('unmockedFunction should log into console', () => {
    const spyLog = jest.spyOn(console, 'log');

    unmockedFunction();
    expect(spyLog).toHaveBeenCalled();
  });
});
