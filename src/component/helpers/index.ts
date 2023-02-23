export const roundNumber = (number: number) =>
    Number(number.toString().match(/^\d+(?:\.\d{0,2})?/));
