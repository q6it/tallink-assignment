import { isPrime } from 'mathjs';

import { roundNumber } from '.';

export const sum = (a: number, b: number): number => a + b;

export const divide = (a: number, b: number): number => roundNumber(a / b);

export const getReminder = (a: number, b: number): number => a % b;

export const getHighestPrime = (a: number, b: number) => {
    if (!a && !b) return 'No prime numbers';

    const highestNumber = a > b ? a : b;

    let highestPrimeNumber = null;
    for (let i = highestNumber; i >= 2; i--) {
        if (isPrime(i)) {
            highestPrimeNumber = i;
            break;
        }
    }

    if (!highestPrimeNumber) return 'No prime numbers';

    return highestPrimeNumber;
};
