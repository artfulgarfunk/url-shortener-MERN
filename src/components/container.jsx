import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import InputArea from './InputArea.jsx';
import OutputArea from './OutputArea.jsx';

export default class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      inputVal: ''
    };
  }

  inputChangedHandler(valueFromChild) {
    this.setState({
      inputVal: valueFromChild
    });
  }

  render() {
    return (
      <div>
        <InputArea newVal={(vfc) => this.inputChangedHandler(vfc)}/>
        <h2>{this.state.inputVal}</h2>
      </div>
    );
  }
};
