import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class InputArea extends React.Component {
  constructor(props) {
    super(props);
    this.onChange=this.onChange.bind(this);
  }

  onChange(event) {
    this.props.newVal(event.target.value);
  }

  render() {
    return (
      <div>
         InputArea
         <input type="text" onChange={this.onChange} />
      </div>
    );
  }
};
