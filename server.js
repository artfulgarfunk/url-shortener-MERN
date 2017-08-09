const express = require('express');

const app = express();
app.use(express.static('static'));

app.listen(3000, function() {
  console.log('URL Shortener started on port 3000');
})
