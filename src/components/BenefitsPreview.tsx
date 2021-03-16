import React from "react";
import * as benefits from '../core/benefits';

export class BenefitsPreview extends React.Component <{ employeeName: string, dependentNames: string[] }, {}> {
  render() {
    const annualCost = benefits.calculateAnnualCost(this.props.employeeName, this.props.dependentNames);
    return (
      <div>
        <h2>Benefits Deduction Preview</h2>
        <table>
          <tbody>
            <tr>
              <th></th>
              <th>Annually</th>
              <th>Per Paycheck</th>
            </tr>
            <tr>
              <td>Gross</td>
              <td>${benefits.getGrossSalary()}</td>
              <td>${benefits.getGrossPaycheck()}</td>
            </tr>
            <tr>
              <td>Deduction</td>
              <td>${annualCost}</td>
              <td>${benefits.convertToPerPaycheckCost(annualCost)}</td>
            </tr>
            <tr>
              <td>Net Pay</td>
              <td>${benefits.calculateNetSalary(annualCost)}</td>
              <td>${benefits.calculateNetPaycheck(annualCost)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}