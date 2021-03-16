import React from "react";
import { NameTextInput } from "./NameTextInput";

export class EmployeeField extends React.Component<{ name: string, onEmployeeNameUpdated: Function }, { value: string }> {
  constructor(props: any) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(newName: string) {
    this.props.onEmployeeNameUpdated(newName);
  }

  render() {
    return (
      <div>
        <div>Employee Name</div>
        <NameTextInput name={this.props.name} onNameChange={this.handleNameChange}></NameTextInput>
      </div>
    );
  }
}
