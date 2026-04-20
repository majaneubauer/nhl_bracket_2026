const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.get('/api/nhl/standings', async (req, res) => {
  try {
    const nhlRes = await fetch('https://api-web.nhle.com/v1/standings/now');
    const data = await nhlRes.json();
    res.json(data);
  } catch (err) {
    console.error('Failed to fetch NHL data:', err);
    res.status(500).json({ error: 'Failed to fetch NHL standings' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Proxy server running on port ${PORT}`));
