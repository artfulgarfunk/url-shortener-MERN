import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import InputArea from './InputArea.jsx';
import OutputArea from './OutputArea.jsx';

export default class Container extends React.Component {
  render() {
    return (
      <div>
        <h2> Shortening URLs since 1917... </h2> 
        <InputArea/>
        <OutputArea/>
      </div>
    )
  };
};
