import React from 'react';
import ReactDOM from 'react-dom';
import Container from './components/container.jsx'

var contentNode = document.getElementById('contents');
var component = <Container />;
ReactDOM.render(component, contentNode);
