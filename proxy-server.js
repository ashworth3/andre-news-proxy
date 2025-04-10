const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Render will inject this
const COINDESK_API_KEY = process.env.COINDESK_API_KEY;

app.use(cors());

app.get('/news', async (req, res) => {
  try {
    const response = await fetch('https://data-api.coindesk.com/news/v1/article/list', {
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
  console.log(`Server is running on port ${PORT}`);
});