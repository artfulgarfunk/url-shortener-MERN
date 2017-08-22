const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(express.static('static'));
app.use(bodyParser.json());

const urls = [
  {
    id: 1, longURL: 'www.aVeryLongUrl.com', shortURL: 'www.shortUrl.com', shortened: new Date('1992-10-26'),
  },
  {
    id: 2, longURL: 'www.AnotherLongOne.com', shortURL: 'www.anotherShort.com', shortened: new Date('1990-6-18'),
  },
  {
    id: 3, longURL: 'www.YetAnotherLongURL.com', shortURL: 'www.yetAnotherConclusivelyAbbreviated.com', shortened: new Date('1990-12-18'),
  },
  {
    id: 4, longURL: 'www.LooooongYewAreElle.com', shortURL: 'www.short.com', shortened: new Date('2016-05-12'),
  }
]

app.listen(3000, function() {
  console.log('URL Shortener started on port 3000');
})

app.get('/short/', (req, res) => {
  const metadata = { total_count: urls.length };
  res.json({ _metadata: metadata, records: urls });
});

// for getting a short url returned to the user
app.post('/short', (req, res) => {
  const longURL = req.body;
  longURL.id = urls.length + 1;
  console.log(req.url);
  longURL.shortURL = req.url + "/" + longURL.id;
  console.log(longURL.shortURL);
  longURL.shortened = new Date();
  urls.push(longURL);
  res.json(longURL);
});


app.get('/short/:urlId', (req, res) => {
  url = urls[req.params.urlId-1];
  console.log(req.url);
  res.redirect(url.longURL);
});
