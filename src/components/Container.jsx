import React from 'react';
import ReactDOM from 'react-dom';
import {UrlTable} from './UrlTable.jsx';
import {UrlFilter} from './UrlFilter.jsx';
import {UrlAdd} from './UrlAdd.jsx';

const urls = [
  {
    id: 1, longURL: 'www.aVeryLongUrl.com', shortURL: 'www.shortUrl.com',
  },
  {
    id: 2, longURL: 'www.AnotherLongOne.com', shortURL: 'www.anotherShort.com'
  },
  {
    id: 3, longURL: 'www.YetAnotherLongURL.com', shortURL: 'www.yetAno.com'
  }
]

export class Container extends React.Component {
  constructor() {
    super();
    this.state = { urls: [] };
    this.shortenURL = this.shortenURL.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    setTimeout(() => {
      this.setState({ urls: urls })
    }, 500);
  }

  shortenURL(newURL) {
    const newURLS = this.state.urls.slice();
    newURL.id = this.state.urls.length + 1;
    newURLS.push(newURL);
    this.setState({ urls: newURLS });
  }

  render () {
    return (
      <div>
      <h1> Shortening URLs since 1817 </h1>
      <hr />
      <UrlTable urls={this.state.urls}/>
      <hr />
      <UrlFilter />
      <hr />
      <UrlAdd shortenURL={this.shortenURL}/>
      </div>
    );
  }
}
