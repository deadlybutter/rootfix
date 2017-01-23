require('dotenv').config();
const forky = require('forky');
forky({path: `${__dirname}/app.js`, workers: process.env.WORKERS});
