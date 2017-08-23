const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(express.static('static'));
app.use(bodyParser.json());

const urls = [
  {
    id: 1, longURL: 'https://www.tesla.com/en_GB/?redirect=no', shortURL: '/short/1', shortened: new Date('1992-10-26'),
  },
  {
    id: 2, longURL: 'https://www.google.co.uk/?gfe_rd=cr&ei=QmadWcm7O8Xc8AfXgqnYCw', shortURL: '/short/2', shortened: new Date('1990-6-18'),
  },
  {
    id: 3, longURL: 'https://www.reddit.com/', shortURL: '/short/3', shortened: new Date('1990-12-18'),
  },
  {
    id: 4, longURL: 'https://waitbutwhy.com/', shortURL: '/short/4', shortened: new Date('2016-05-12'),
  }
]

app.listen(process.env.PORT || 5000)

app.get('/short/', (req, res) => {
  const metadata = { total_count: urls.length };
  res.json({ _metadata: metadata, records: urls });
});

// for getting a short url returned to the user
app.post('/short', (req, res) => {
  const longURL = req.body;
  longURL.id = urls.length + 1;
  console.log("Url Shortened");
  longURL.shortURL = req.url + "/" + longURL.id;
  longURL.shortened = new Date();
  urls.push(longURL);
  res.json(longURL);

});


app.get('/short/:urlId', (req, res) => {
  url = urls[req.params.urlId-1];
  console.log(req.url);
  res.redirect(url.longURL);
});
