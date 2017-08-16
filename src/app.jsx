import React from 'react';
import ReactDOM from 'react-dom';

const contentNode = document.getElementById('contents');



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
    console.log('HELLO 1');
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


class UrlFilter extends React.Component {
  render () {
    return (
      <div> Filter Placeholder </div>
    );
  }
}

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

class Container extends React.Component {
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
ReactDOM.render(<Container />, contentNode);
