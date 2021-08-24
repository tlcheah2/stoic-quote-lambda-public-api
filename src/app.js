const express = require('express');
const quoteService = require('./services/quoteService');
const { connectDB } = require('./mongodb');

const app = express();
// Init connection to MongoDB
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/stoic-quote', async (req, res) => {
  try {
    const quotes = await quoteService.getRandomSingleQuote({ category: 'stoic' });
    console.log('Returned quotes', quotes);
    return res.json({ data: quotes[0] });
  } catch (err) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = app;