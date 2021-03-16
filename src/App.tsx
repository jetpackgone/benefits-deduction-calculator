import React from 'react';
import './App.css';
import { BenefitsPreview } from './components/BenefitsPreview';
import { DependentsField } from './components/DependentsField';
import { EmployeeField } from './components/EmployeeField';

export class App extends React.Component<{}, { employeeName: string, dependentNames: string[] }> {
  constructor(props: any) {
    super(props);
    this.state = {
      employeeName: 'test',
      dependentNames: []
    }
    this.updateEmployeeName = this.updateEmployeeName.bind(this);
    this.updateDependentNames = this.updateDependentNames.bind(this);
  }

  updateEmployeeName(newEmployeeName: string) {
    this.setState({
      employeeName: newEmployeeName
    });
  }

  updateDependentNames(newDependentNames: string[]) {
    this.setState({
      dependentNames: newDependentNames
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Employee Benefits Deduction Calculator</h1>
          <p>
            Enter your information below to preview your benefits deduction costs.
          </p>
          <EmployeeField name={this.state.employeeName} onEmployeeNameUpdated={this.updateEmployeeName}></EmployeeField>
          <DependentsField names={this.state.dependentNames} onDependentNamesUpdated={this.updateDependentNames}></DependentsField>
          <BenefitsPreview employeeName={this.state.employeeName} dependentNames={this.state.dependentNames}></BenefitsPreview>
        </header>
      </div>
    );
  }
}

export default App;
