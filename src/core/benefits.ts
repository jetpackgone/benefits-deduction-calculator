/**
 * Calculates annual benefits cost for given employee and dependents names.
 * @param employeeName Name of employee,
 * @param dependentNames Names of dependents,
 * @returns 
 */
export function calculateAnnualCost(employeeName: string, dependentNames: string[]): number {
  const employeeCost = 1000;
  const dependentCost = 500;
  let cost = 0;
  if (!!employeeName) {
    cost = employeeName[0].toLowerCase() === 'a' ? employeeCost * 0.9 : employeeCost
  }
  dependentNames.forEach(name => {
      if (!!name) {
        cost += name[0].toLowerCase() === 'a' ? dependentCost * 0.9 : dependentCost
      }
  });
  return cost;
}

/**
 * Calculates benefits cost per paycheck based on annual cost.
 * @param annualCost Annual cost of benefits.
 * @returns Cost per paycheck rounded to nearest cent.
 */
export function convertToPerPaycheckCost(annualCost: number): number {
  if (annualCost <= 0) {
    return 0;
  }
  return Math.round(annualCost / 26 * 100) / 100;
}

export function calculateGrossSalary(annualBenefitsCost: number): number {
  return 2000 * 26 - annualBenefitsCost;
}

export function calculateGrossPaycheck(annualBenefitsCost: number): number {
  return 2000 - convertToPerPaycheckCost(annualBenefitsCost);
}