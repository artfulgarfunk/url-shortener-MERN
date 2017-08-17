import React from 'react';
import ReactDOM from 'react-dom';

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
        <form name="urlAdd" onSubmit={this.handleSubmit}>
          <input type="text" name="longURL" placeholder="Long URl" />
          <button> Add </button>
        </form>
      </div>
    )
  }
}
