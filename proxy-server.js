const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;
const COINDESK_API_KEY = process.env.COINDESK_API_KEY;

app.use(cors());

app.get('/news', async (req, res) => {
  try {
    const url = 'https://data-api.coindesk.com/news/v1/article/list?lang=EN&limit=10';

    const response = await fetch(url, {
      headers: {
        'x-api-key': COINDESK_API_KEY
      }
    });

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error('Error fetching news:', err);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});