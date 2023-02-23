import { roundNumber } from '.';

export const sum = (a: number, b: number): number => a + b;

export const divide = (a: number, b: number): number => roundNumber(a / b);

export const getReminder = (a: number, b: number): number => a % b;

const isPrime = (number: number) => {
    if (number !== 2 && number % 2 === 0) return false;

    let prime = number !== 1;

    for (let index = 2; index <= Math.sqrt(number); index++) {
        if (number % index === 0) {
            prime = false;
            break;
        }
    }

    return prime;
};

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
