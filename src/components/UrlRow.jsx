import React from 'react';
import ReactDOM from 'react-dom';

export const UrlRow = (props) => (
  <tr>
    <td>{props.url.longURL}</td>
    <td>{props.doc}{props.url.shortURL}</td>
    <td>{props.url.shortened} </td>
  </tr>
)
