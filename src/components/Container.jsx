import React from 'react';
import ReactDOM from 'react-dom';
import {UrlTable} from './UrlTable.jsx';
import {UrlFilter} from './UrlFilter.jsx';
import {UrlAdd} from './UrlAdd.jsx';

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
    fetch('/shorts').then(response => response.json()).then(data => {
      console.log("Total URL Count:", data._metadata.total_count);
      data.records.forEach(url => {
        url.created = new Date(url.created);
        if (url.completionDate)
        url.completionDate = new Date(url.completionDate);
      });
      this.setState({ urls: data.records });
    }).catch(err => {
      console.log(err);
    });
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
