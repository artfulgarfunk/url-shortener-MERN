import React from 'react';
import ReactDOM from 'react-dom';
import {UrlRow} from './UrlRow.jsx';

export function UrlTable(props) {
  const urlRows = props.urls.map(url => <UrlRow key={url.id} url={url} />)
  return (
    <table className="bordered-table">
      <thead>
        <tr>
          <th> Id </th>
          <th> Long Url </th>
          <th> Short Url </th>
          <th> Shortend </th>
        </tr>
      </thead>
      <tbody>{urlRows}</tbody>
    </table>
  );
}
