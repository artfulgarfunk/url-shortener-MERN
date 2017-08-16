import React from 'react';
import ReactDOM from 'react-dom';

var contentNode = document.getElementById('contents');

const urls = [
  {
    id: 1, longURL: 'www.aVeryLongUrl.com', shortURL: 'www.shortUrl.com',
  },
  {
    id: 2, longURL: 'www.AnotherLongOne.com', shortURL: 'www.anotherShort.com'
  }
]

class Container extends React.Component {
  render () {
    return (
      <div>
        <h1> Shortening URLs since 1817 </h1>
        <hr />
        <UrlTable urls={urls}/>
        <hr />
        <UrlFilter />
        <hr />
        <UrlAdd />
      </div>
    );
  }
}


function UrlTable(props) {
  const urlRows = props.urls.map(url => <UrlRow key={url.id} url={url} />)
  return (
    <table className="bordered-table">
      <thead>
        <tr>
          <th> Id </th>
          <th> Long Url </th>
          <th> Short Url </th>
        </tr>
      </thead>
      <tbody>{urlRows}</tbody>
    </table>
  );
}

const UrlRow = (props) => (
  <tr>
    <td>{props.url.id}</td>
    <td>{props.url.longURL}</td>
    <td>{props.url.shortURL}</td>
  </tr>
)

class UrlAdd extends React.Component {
  render () {
    return (
      <div> Url Add Placeholder </div>
    );
  }
}

class UrlFilter extends React.Component {
  render () {
    return (
      <div> Filter Placeholder </div>
    );
  }
}

ReactDOM.render(<Container />, contentNode);
