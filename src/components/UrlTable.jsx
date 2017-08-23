import React from 'react';
import ReactDOM from 'react-dom';
import {UrlRow} from './UrlRow.jsx';

export function UrlTable(props) {
  const urlRows = props.urls.map(url => <UrlRow doc={props.doc} key={url.id} url={url} />)
  return (
    <table className="bordered-table">
      <thead>
        <tr>
          <th> Original </th>
          <th> Conveniently Abbreviated Uniform Resource Locator </th>
          <th> Time </th>
        </tr>
      </thead>
      <tbody>{urlRows}</tbody>
    </table>
  );
}
