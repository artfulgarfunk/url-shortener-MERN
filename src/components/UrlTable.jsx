import React from 'react';
import ReactDOM from 'react-dom';
import {UrlRow} from './UrlRow.jsx';

export function UrlTable(props) {
  const urlRows = props.urls.map(url => <UrlRow doc={props.doc} key={url.id} url={url} />)
  return (
    <table className="bordered-table">
      <thead>
        <h2> Previously Shortened </h2>
        <tr>
          <th> Orgnl </th>
          <th> Shorter </th>
          <th> Shortened </th>
        </tr>
      </thead>
      <tbody>{urlRows}</tbody>
    </table>
  );
}
