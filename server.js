const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(express.static('static'));
app.use(bodyParser.json());

const urls = [
  {
    id: 1, longURL: 'www.aVeryLongUrl.com', shortURL: 'www.shortUrl.com', shortened: 'SomeTimeAgo',
  },
  {
    id: 2, longURL: 'www.AnotherLongOne.com', shortURL: 'www.anotherShort.com', shortened: 'LongSomeTimeAgo',
  },
  {
    id: 3, longURL: 'www.YetAnotherLongURL.com', shortURL: 'www.yetAno.com', shortened: 'VeryLongSomeTimeAgo',
  },
  {
    id: 4, longURL: 'www.LooooongYewAreElle.com', shortURL: 'www.short.com', shortened: 'MuchVeryLongSomeTimeAgo',
  }
]

app.listen(3000, function() {
  console.log('URL Shortener started on port 3000');
})

app.get('/shorts/', (req, res) => {
  const metadata = { total_count: urls.length };
  res.json({ _metadata: metadata, records: urls });
});

// for getting a short url returned to the user
app.post('/shorts', (req, res) => {
  const longURL = req.body;
  longURL.id = urls.length + 1;
  console.log(req.url);
  longURL.shortURL = req.url + "/" + longURL.id;
  console.log(longURL.shortURL);
  // longURL.shortened = new date () now or whatever time format
  longURL.shortened = "A Certain Time Ago"
  urls.push(longURL);
  res.json(longURL);
});


app.get('/shorts/:urlId', (req, res) => {
  url = urls[req.params.urlId-1];
  console.log(url.longURL);
  res.redirect(url.longURL);
});
