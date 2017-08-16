const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static('static'));
app.use(bodyParser.json());

app.listen(3000, function() {
  console.log('URL Shortener started on port 3000');
})

app.get('/hello', (req, res) => {
  res.send('Hello World')
})

const urls = [
  {
    id: 1, longURL: "www.reddit.com", shortURL: "tbc"
  },
  {
    id: 2, longURL: "www.facebook.com", shortURL:"tbc"
  }
]

// LIST OF ALL URLS SHORTENED AND OTHERWISE
app.get('/shorts', (req, res) => {
  const metadata = { total_count: urls.length };
  console.log('looking at all the URLs');
  res.json({ _metadata: metadata, records: urls })
})

app.post('/shorts', (req, res) => {
  console.log("does it get to here? ");
  const newURL = req.body;
  newURL.id = urls.length + 1;
  newURL.created = new Date();

  if (!newURL.status)
    newURL.status = 'New';

  urls.push(newURL);

  res.send(newURL.longURL + ' has been shortened');
  res.send('Did it work???')
})

// const MongoClient = require('mongodb').MongoClient;
//
// var mongoose = require('mongoose');
// mongoose.connnect('mongodb://urlshortener:urlshortener@ds027495.mlab.com:27495/urlshortener')
