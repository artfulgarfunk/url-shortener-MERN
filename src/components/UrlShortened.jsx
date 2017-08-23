import React from 'react';
import ReactDOM from 'react-dom';

export const UrlShortened = (props) => (
  <div> {props.doc}{props.url.shortURL} </div>
)
