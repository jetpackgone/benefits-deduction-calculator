import React from "react";
import { NameTextInput } from "./NameTextInput";

class DependentsListItem extends React.Component <{ name: string, onDependentRemoved: Function }, {}> {
  constructor(props: any) {
    super(props);
    this.removeDependent = this.removeDependent.bind(this);
  }

  removeDependent() {
    this.props.onDependentRemoved(this.props.name);
  }

  render() {
    return (<li>
      {this.props.name}
      <button onClick={this.removeDependent}>Remove</button>
    </li>);
  }
}

class AddDependentTextField extends React.Component<{ onDependentAdded: Function }, { name: string }> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: ''
    }
    this.addDependent = this.addDependent.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(newName: string) {
    this.setState({
      name: newName
    });
  }

  addDependent(event: any) {
    this.props.onDependentAdded(this.state.name);
    this.setState({
      name: ''
    });
  }

  render() {
    return (
      <div>
        <NameTextInput name={this.state.name} onNameChange={this.handleNameChange}></NameTextInput>
        <button onClick={this.addDependent}>Add Dependent</button>
      </div>
    )
  }
}

export class DependentsField extends React.Component<{ names: string[], onDependentNamesUpdated: Function }, {}> {
  constructor(props: any) {
    super(props);
    this.handleDependentAdded = this.handleDependentAdded.bind(this);
    this.removeDependent = this.removeDependent.bind(this);
  }

  handleDependentAdded(newName: string) {
    this.props.onDependentNamesUpdated([...this.props.names, newName]);
  }

  removeDependent(name: string) {
    this.props.onDependentNamesUpdated(this.props.names.filter(x => x !== name));
  }

  render() {
    const names = this.props.names.map(name => {
      return <DependentsListItem name={name} onDependentRemoved={this.removeDependent}></DependentsListItem>
    });
    return (
      <div>
        Dependents Names
        <div>
          {names.length === 0 ? "No dependents specified." : ""}
          <ul>
            {names}
          </ul>
          <AddDependentTextField onDependentAdded={this.handleDependentAdded}></AddDependentTextField>
        </div>
      </div>
    );
  }
}
