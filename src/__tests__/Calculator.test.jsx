import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { sum, divide, getReminder, getHighestPrime } from '../component/helpers/calculations';

import '@testing-library/jest-dom';

import Calculator from '../component/Calculator';
import { roundNumber } from '../component/helpers';

describe('Calculator is rendered', () => {
    test('renders without crashing', () => {
        const { getByText, getByRole } = render(<Calculator />);
        expect(getByRole('button')).toBeInTheDocument();
    });
});

let a;
let b;

beforeEach(() => {
    a = Math.floor(Math.random() * 100);
    b = Math.floor(Math.random() * 100);
});

describe('Test sum function', () => {
    test(`Should sum ${a} + ${b}`, () => {
        expect(sum(a, b)).toBe(a + b);
        expect(typeof sum(a, b)).toBe('number');
    });
});

describe('Test divide function', () => {
    test(`Should divide ${a} / ${b}`, () => {
        expect(b).toBeGreaterThan(0);
        expect(divide(a, b)).toBe(roundNumber(a / b));
        expect(typeof divide(a, b)).toBe('number');
    });
});

describe('Test reminder function', () => {
    test(`Should get reminder ${a} % ${b}`, () => {
        expect(b).toBeGreaterThan(0);
        expect(getReminder(a, b)).toBe(a % b);
        expect(typeof getReminder(a, b)).toBe('number');
    });
});

describe('Test highest prime function', () => {
    test('should return the highest prime number between the randomly generated values of a and b', () => {
        const result = getHighestPrime(a, b);

        if (typeof result === 'number') {
            expect(result).not.toBeNull();
            expect(result).toBeGreaterThanOrEqual(Math.min(a, b));
            expect(result).toBeLessThanOrEqual(Math.max(a, b));
        }
    });

    test('should return null if there are no prime numbers in the range of the randomly generated values of a and b', () => {
        const result = getHighestPrime(a, b);

        if (typeof result === 'string') {
            expect(result).toMatch('No prime numbers');
        }
    });
});
