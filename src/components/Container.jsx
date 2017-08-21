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
    this.serverSend = this.serverSend.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

// Call to List API
  loadData() {
    fetch('/shorts').then(response => response.json()).then(data => {
      console.log("Total URL Count:", data._metadata.total_count);
      this.setState({ urls: data.records });
    }).catch(err => {
      console.log(err);
    });
  }

// Call to Create API
  serverSend(newURL) {
    fetch('/shorts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // add in shortening method? then send long & short to server
      body: JSON.stringify(newURL),
    }).then(response => response.json()).then(updatedURL => {
      const newURLs = this.state.urls.concat(updatedURL);
      this.setState({ urls: newURLs});
    }).catch(err => {
      alert("Error in sending data to the server: " + err.message);
     });
  }

  shortenURL(url) {
    this.serverSend(url)
  }

  render () {
    return (
      <div>
      <h1> Shortening URLs since 1817 </h1>
      <hr />
      <UrlAdd shortenURL={this.shortenURL}/>
      <hr />
      <UrlTable urls={this.state.urls}/>
      <hr />
      <UrlFilter />
      </div>
    );
  }
}
