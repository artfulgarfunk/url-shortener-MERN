import React from 'react';
import ReactDOM from 'react-dom';

export const UrlRow = (props) => (
  <tr>
    <td>{props.url.id}</td>
    <td>{props.url.longURL}</td>
    <td>{props.url.shortURL}</td>
  </tr>
)
