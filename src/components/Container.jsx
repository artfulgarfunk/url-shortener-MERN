import React from 'react';
import ReactDOM from 'react-dom';
import {UrlTable} from './UrlTable.jsx';
import {UrlFilter} from './UrlFilter.jsx';
import {UrlAdd} from './UrlAdd.jsx';
import {UrlShortened} from './UrlShortened.jsx';
var validUrl = require('valid-url');

export class Container extends React.Component {
  constructor() {
    super();
    this.state = { urls: [],
                   showShort: false,
                   showPrevious: false, };
    this.shortenURL = this.shortenURL.bind(this);
    this.serverSend = this.serverSend.bind(this);
    this.onShortenClick = this.onShortenClick.bind(this);
    this.shortenedURL = this.shortenedURL.bind(this);
    this.showPrevious = this.showPrevious.bind(this);
    this.previousButtonContent = this.previousButtonContent.bind(this);
    this.isValidURL = this.isValidURL.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

// Call to List API
  loadData() {
    fetch('/short').then(response => response.json()).then(data => {
      console.log("Total URL Count:", data._metadata.total_count);
      this.setState({ urls: data.records });
    }).catch(err => {
      console.log(err);
    });
  }

// Call to Create API
  serverSend(newURL) {
    fetch('/short', {
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
     this.onShortenClick();
  }

  shortenURL(url) {
    if (this.isValidURL(url) ? this.serverSend(url) : alert("Please enter a valid URL"));
    // this.serverSend(url);
  }

  isValidURL(url) {
    if (!(validUrl.isUri(url.longURL))) {
      return false;
    } else {
      return true;
    };
  }

  // Render UrlShortened Component when Shorten is clicked
  onShortenClick() {
    this.setState({
      showShort: true,
    });
  }

  // Get the current shortened url json object
  shortenedURL() {
    var urls = this.state.urls;
    var last_url = urls[urls.length-1];
    return last_url;
  }

  showPrevious() {
    if (this.state.showPrevious == false) {
    this.setState({
      showPrevious: true,
    });
    } else {
      this.setState({
        showPrevious: false,
      });
    }
  }

  previousButtonContent() {
    var content = this.state.showPrevious ? "Hide " : "Show ";
    return content;
  }

  render () {
    var shortenedURL = this.shortenedURL();
    var buttonContent = this.previousButtonContent();
    return (
      <div>
      <h1> Shortening URLs since 1817 </h1>
      <hr />
      <UrlAdd shortenURL={this.shortenURL}/>
      <button onClick={this.showPrevious}>  {buttonContent} Previous Urls </button>
      <hr />
      {this.state.showShort ? <UrlShortened url={shortenedURL}/>: null }
      <hr />
      {this.state.showPrevious ? <UrlTable urls={this.state.urls}/>: null }
      </div>
    );
  }
}
