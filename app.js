const express = require('express');
const app = express();

app.get('*', (req, res) => {
  res.redirect(301, `https://www.${req.headers.host}`);
});

app.listen(8080, () => {
  console.log('App process listening...');
});
