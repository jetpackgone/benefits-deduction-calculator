import React from "react";
import * as benefits from '../core/benefits';

export class BenefitsPreview extends React.Component <{ employeeName: string, dependentNames: string[] }, {}> {
  render() {
    const annualCost = benefits.calculateAnnualCost(this.props.employeeName, this.props.dependentNames);
    return (
      <div>
        <h2>Benefits Deduction Preview</h2>
        <table>
          <tr>
            <th></th>
            <th>Annually</th>
            <th>Per Paycheck</th>
          </tr>
          <tr>
            <td>Deduction</td>
            <td>${annualCost}</td>
            <td>${benefits.convertToPerPaycheckCost(annualCost)}</td>
          </tr>
          <tr>
            <td>Gross Salary</td>
            <td>${benefits.calculateGrossSalary(annualCost)}</td>
            <td>${benefits.calculateGrossPaycheck(annualCost)}</td>
          </tr>
        </table>
      </div>
    );
  }
}