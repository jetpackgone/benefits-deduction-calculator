import React from "react";
import * as benefits from '../core/benefits';

export class BenefitsPreview extends React.Component <{ employeeName: string, dependentNames: string[] }, {}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
        Benefits Deduction: ${benefits.calculateAnnualCost(this.props.employeeName, this.props.dependentNames)}
      </div>
    );
  }
}