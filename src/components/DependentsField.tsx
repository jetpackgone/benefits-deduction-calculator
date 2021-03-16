import React from "react";
import { Dependent } from "../models/dependent";
import { NameTextInput } from "./NameTextInput";

class DependentsListItem extends React.Component <{ data: Dependent, onDependentRemoved: Function }, {}> {
  constructor(props: any) {
    super(props);
    this.removeDependent = this.removeDependent.bind(this);
  }

  removeDependent() {
    this.props.onDependentRemoved(this.props.data.id);
  }

  render() {
    return (<li>
      {this.props.data.name}
      <button onClick={this.removeDependent}>Remove</button>
    </li>);
  }
}

class AddDependentTextField extends React.Component<{ onDependentAdded: Function }, { name: string, isInvalid: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: '',
      isInvalid: false
    }
    this.addDependent = this.addDependent.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(newName: string) {
    this.setState({
      name: newName,
      isInvalid: !newName
    });
  }

  addDependent(event: any) {
    if (!this.state.name) {
      this.setState({
        isInvalid: true
      });
    } else {
      let newDependent: Dependent = {
        id: Math.random() * 1000000 + 1,
        name: this.state.name
      };
      this.props.onDependentAdded(newDependent);
      this.setState({
        name: ''
      });
    }
  }

  render() {
    return (
      <div>
        <NameTextInput name={this.state.name} onNameChange={this.handleNameChange} onEnter={this.addDependent}></NameTextInput>
        <button onClick={this.addDependent}>Add Dependent</button>
        {this.state.isInvalid ? 'Dependent name cannot be empty': ''}
      </div>
    )
  }
}

export class DependentsField extends React.Component<{ dependents: Dependent[], onDependentNamesUpdated: Function }, {}> {
  constructor(props: any) {
    super(props);
    this.handleDependentAdded = this.handleDependentAdded.bind(this);
    this.handleDependentRemoved = this.handleDependentRemoved.bind(this);
  }

  handleDependentAdded(newDependent: Dependent) {
    this.props.onDependentNamesUpdated([...this.props.dependents, newDependent]);
  }

  handleDependentRemoved(dependentId: number) {
    this.props.onDependentNamesUpdated(this.props.dependents.filter(x => x.id !== dependentId));
  }

  render() {
    const names = this.props.dependents.map(dependent => {
      return <DependentsListItem key={dependent.id} data={dependent} onDependentRemoved={this.handleDependentRemoved}></DependentsListItem>
    });
    return (
      <div>
        <h3>Dependent Names</h3>
        <div>
          <AddDependentTextField onDependentAdded={this.handleDependentAdded}></AddDependentTextField>
          {names.length === 0 ? "No dependents specified." : ""}
          <ul>
            {names}
          </ul>
        </div>
      </div>
    );
  }
}
