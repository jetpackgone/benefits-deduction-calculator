import React from "react";

export class NameTextInput extends React.Component<{ name: string, onNameChange: Function }, {}> {
  constructor(props: any) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: any) {
    if (event && event.target) {
      this.props.onNameChange(event.target.value);
    }
  }

  render() {
    return (
      <input type="text" value={this.props.name} onChange={this.handleChange} />
    );
  }
}