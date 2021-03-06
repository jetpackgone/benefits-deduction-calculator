import * as benefits from './benefits';

describe('calculateAnnualCost', () => {
  test('non-A-name employee and no dependents', () => {
    let result = benefits.calculateAnnualCost('Bob', []);
    expect(result).toBe(1000);
  });

  test('A-name employee and no dependents', () => {
    let result = benefits.calculateAnnualCost('Alice', []);
    expect(result).toBe(900);
  });

  test('non-A-name employee and non-A-name dependent', () => {
    let result = benefits.calculateAnnualCost('Bob', ['Charlie']);
    expect(result).toBe(1500);
  });

  test('non-A-name employee and A-name dependent', () => {
    let result = benefits.calculateAnnualCost('Bob', ['Arthur']);
    expect(result).toBe(1450);
  });

  test('A-name employee and A-name dependent', () => {
    let result = benefits.calculateAnnualCost('Alice', ['Arthur']);
    expect(result).toBe(1350);
  });

  test('non-A-name employee and 1 non-A-name and 1 A-name dependent', () => {
    let result = benefits.calculateAnnualCost('Bob', ['Arthur', 'Charlie']);
    expect(result).toBe(1950);
  });

  test('empty employee name has 0 cost', () => {
    let result = benefits.calculateAnnualCost('', []);
    expect(result).toBe(0);
  });

  test('empty dependent name has 0 cost', () => {
    let result = benefits.calculateAnnualCost('Bob', ['']);
    expect(result).toBe(1000);
  });
});

describe('convertToMonthlyCost', () => {
  test('converts', () => {
    let result = benefits.convertToPerPaycheckCost(52);
    expect(result).toBe(2);
  });

  test('converts to nearest cent', () => {
    let result = benefits.convertToPerPaycheckCost(100);
    expect(result).toBe(3.85);
  });

  test('returns 0 given 0', () => {
    let result = benefits.convertToPerPaycheckCost(0);
    expect(result).toBe(0);
  });
  
  test('returns 0 given negative', () => {
    let result = benefits.convertToPerPaycheckCost(-1);
    expect(result).toBe(0);
  });
});

describe('calculateNetSalary', () => {
  test('deducts benefits cost from salary', () => {
    let result = benefits.calculateNetSalary(10000);
    expect(result).toBe(42000);
  });
});

describe('calculateNetPaycheck', () => {
  test('deducts benefits cost from paycheck whole number', () => {
    let result = benefits.calculateNetPaycheck(52);
    expect(result).toBe(1998);
  });

  test('deducts benefits cost from paycheck rounded', () => {
    let result = benefits.calculateNetPaycheck(100);
    expect(result).toBe(1996.15);
  });
});
