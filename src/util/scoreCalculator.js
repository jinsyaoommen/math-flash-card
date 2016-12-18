import { toArray } from 'lodash';

export function scoreCalculator(inputMap, type) {
  return toArray(inputMap).reduce((n, input) => {
    const calc = type === 'sum'
      ? Number(input[0]) + Number(input[1]) === Number(input[2])
      : Number(input[0]) - Number(input[1]) === Number(input[2]);

    if (calc) {
      return n + 1;
    }
    return n;
  }, 0)
}
