import { AdHocCalculator } from './AdHoc';

describe('AdHocCalculator', () => {
  it('should sum two numbers', () => {
    expect(new AdHocCalculator().sum(1, 2)).toBe(3);
  });

  it('should sum two numbers as strings', () => {
    expect(new AdHocCalculator().sum('1', '2')).toBe(3);
  });
});
