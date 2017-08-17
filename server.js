const express = require('express');
const app = express();
app.use(express.static('static'));

const urls = [
  {
    id: 1, longURL: 'www.aVeryLongUrl.com', shortURL: 'www.shortUrl.com',
  },
  {
    id: 2, longURL: 'www.AnotherLongOne.com', shortURL: 'www.anotherShort.com'
  },
  {
    id: 3, longURL: 'www.YetAnotherLongURL.com', shortURL: 'www.yetAno.com'
  },
  {
    id: 4, longURL: 'www.LooooongYewAreElle.com', shortURL: 'www.short.com'
  }
]

app.listen(3000, function() {
  console.log('URL Shortener started on port 3000');
})

app.get('/shorts', (req, res) => {
  const metadata = { total_count: urls.length };
  res.json({ _metadata: metadata, records: urls });
});
