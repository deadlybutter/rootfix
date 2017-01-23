require('dotenv').config();
const express = require('express');
const app = express();

app.get('*', (req, res) => {
  res.redirect(301, `https://www.${req.headers.host}`);
});

app.listen(process.env.PORT, () => {
  console.log(`App process listening on port ${process.env.PORT}`);
});
