import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'react-bootstrap';
import {ButtonGroup} from 'react-bootstrap';

export class UrlAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    var form = document.forms.urlAdd;
    this.props.shortenURL({
      longURL: form.longURL.value,
    });
    form.longURL.value = ""; form.shortURL.value = "";
  }
  render() {
    return (
      <div>
        <form name="urlAdd" onSubmit={this.handleSubmit} id="urladd">
          <input type="text" name="longURL" placeholder="Copy and Paste the URL" />
        </form>
        <Button form="urladd" type="submit" bsSize="large" bsStyle="success"> Conveniently Abbreviate!! </Button>
      </div>
    )
  }
}
