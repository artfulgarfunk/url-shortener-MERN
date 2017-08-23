import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Form, FormGroup,FormControl, Grid, Row, Col, HelpBlock, ControlLabel, FieldGroup} from 'react-bootstrap';

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
        <Form name="urlAdd" onSubmit={this.handleSubmit}>
          <FormControl
            name="longURL"
            id="longURL"
            type="text"
            label="Text"
            placeholder="CopyPasta the Long URL"
          />
          <Button type="submit" bsSize="large" bsStyle="success" block>
            Conveniently Abbreviate!
          </Button>
        </Form>
      </div>
    )
  }
}
