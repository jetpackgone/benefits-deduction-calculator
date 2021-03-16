import React from 'react';
import './App.css';
import { BenefitsPreview } from './components/BenefitsPreview';
import { DependentsField } from './components/DependentsField';
import { EmployeeField } from './components/EmployeeField';
import { Dependent } from './models/dependent';

export class App extends React.Component<{}, { employeeName: string, dependents: Dependent[] }> {
  constructor(props: any) {
    super(props);
    this.state = {
      employeeName: '',
      dependents: []
    }
    this.updateEmployeeName = this.updateEmployeeName.bind(this);
    this.updateDependentNames = this.updateDependentNames.bind(this);
  }

  updateEmployeeName(newEmployeeName: string) {
    this.setState({
      employeeName: newEmployeeName
    });
  }

  updateDependentNames(newDependents: Dependent[]) {
    this.setState({
      dependents: newDependents
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
          <div>
            <EmployeeField name={this.state.employeeName} onEmployeeNameUpdated={this.updateEmployeeName}></EmployeeField>
            <DependentsField dependents={this.state.dependents} onDependentNamesUpdated={this.updateDependentNames}></DependentsField>
          </div>
          <BenefitsPreview employeeName={this.state.employeeName} dependentNames={this.state.dependents.map(x => x.name)}></BenefitsPreview>
        </header>
      </div>
    );
  }
}

export default App;
