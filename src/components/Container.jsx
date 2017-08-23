import React from 'react';
import ReactDOM from 'react-dom';
import {UrlTable} from './UrlTable.jsx';
import {UrlFilter} from './UrlFilter.jsx';
import {UrlAdd} from './UrlAdd.jsx';
import {UrlShortened} from './UrlShortened.jsx';
import {Button, Jumbotron, Grid, Row, Col} from 'react-bootstrap';
// import {Jumbotron} from 'react-bootstrap';
var validUrl = require('valid-url');

export class Container extends React.Component {
  constructor() {
    super();
    this.state = { urls: [],
                   showShort: false,
                   showPrevious: false,
                 };
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

  // Get the current URL JSON Object
  shortenedURL() {
    var urls = this.state.urls;
    var last_url = urls[urls.length-1];
    return last_url;
  }

  // Display previously shortened URLs
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
    var currentLocation = (String(document.location)).slice(0,-1);
    return (
      <div className="container-fluid">
        <Jumbotron>
        <Grid>
          <h1> Conveniently Abbreviating Since 2017 </h1>
          <Row className="show-grid">
            <UrlAdd shortenURL={this.shortenURL}/>
          </Row>
          <Row className="show-grid">
            <Button type="submit" onClick={this.showPrevious}> {buttonContent} Previous Urls </Button>
          </Row>
          <Row className="show-grid">
            {this.state.showShort ? <UrlShortened url={shortenedURL} doc={currentLocation}/>: null }
          </Row>
          <Row className="show-grid">
            {this.state.showPrevious ? <UrlTable urls={this.state.urls} doc={currentLocation}/>: null }
          </Row>
        </Grid>
        </Jumbotron>
      </div>
    );
  }
}
