// Uncomment the code below and write your tests
import { getBankAccount, InsufficientFundsError, TransferFailedError } from '.';

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    const acc = getBankAccount(100);
    expect(acc.getBalance()).toBe(100);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    const acc = getBankAccount(100);
    expect(() => acc.withdraw(200)).toThrow(InsufficientFundsError);
  });

  test('should throw error when transferring more than balance', () => {
    const acc = getBankAccount(100);
    expect(() => acc.transfer(200, getBankAccount(200))).toThrow(
      InsufficientFundsError,
    );
  });

  test('should throw error when transferring to the same account', () => {
    const acc = getBankAccount(100);
    expect(() => acc.transfer(100, acc)).toThrowError(TransferFailedError);
  });

  test('should deposit money', () => {
    const acc = getBankAccount(100);
    acc.deposit(200);
    expect(getBankAccount(100).getBalance()).toBe(100);
  });

  test('should withdraw money', () => {
    const acc = getBankAccount(300);
    acc.withdraw(200);
    expect(getBankAccount(300).getBalance()).toBe(300);
  });

  test('should transfer money', () => {
    const firstAcc = getBankAccount(100);
    const secondAcc = getBankAccount(100);
    firstAcc.transfer(50, secondAcc);
    expect(firstAcc.getBalance()).toBe(50);
    expect(secondAcc.getBalance()).toBe(150);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    // Write your tests here
  });

  test('should set new balance if fetchBalance returned number', async () => {
    // Write your tests here
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    // Write your tests here
  });
});
