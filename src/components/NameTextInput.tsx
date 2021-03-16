import React from "react";

export class NameTextInput extends React.Component<{ name: string, onNameChange: Function, onEnter?: Function }, {}> {
  constructor(props: any) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange(event: any) {
    if (event && event.target) {
      this.props.onNameChange(event.target.value);
    }
  }

  handleKeyPress(event: any) {
    if (event && event.key === 'Enter' && this.props.onEnter) {
      this.props.onEnter();
    }
  }

  render() {
    return (
      <input type="text" value={this.props.name} onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
    );
  }
}