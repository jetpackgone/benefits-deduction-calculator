import React from "react";
import { NameTextInput } from "./NameTextInput";

export class EmployeeField extends React.Component<{ name: string, onEmployeeNameUpdated: Function }, { isInvalid: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = {
      isInvalid: false
    }
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(newName: string) {
    this.setState({
      isInvalid: !newName
    });
    this.props.onEmployeeNameUpdated(newName);
  }

  render() {
    return (
      <div>
        <h3>Employee Name</h3>
        <NameTextInput name={this.props.name} onNameChange={this.handleNameChange}></NameTextInput>
        {this.state.isInvalid ? 'Employee name cannot be empty': ''}
      </div>
    );
  }
}
