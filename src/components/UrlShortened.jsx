import React from 'react';
import ReactDOM from 'react-dom';

export const UrlShortened = (props) => (
  <h1> {props.doc}{props.url.shortURL} </h1>
)
