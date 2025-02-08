import express from 'express';
import fetch from 'node-fetch';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.all('/api/cors-proxy', async (req, res) => {
  const targetUrl = req.query.url;

  if (!targetUrl) {
    console.error('Missing URL query parameter');
    return res.status(400).json({ error: 'Missing URL query parameter' });
  }

  // Set CORS headers for all responses
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    // Handle CORS preflight request
    res.status(200).end();
    return;
  }

  try {
    const options = {
      method: req.method,
      headers: {
        ...req.headers,
        'Authorization': 'Bearer YOUR_ACCESS_TOKEN', // Replace with your access token
      },
      body: req.method === 'GET' || req.method === 'HEAD' ? null : JSON.stringify(req.body),
      redirect: 'follow', // Handle redirects
    };

    console.log(`Fetching URL: ${targetUrl} with options:`, options);

    const response = await fetch(targetUrl, options);
    const rawData = await response.text(); // Get raw response as text
    console.log('Raw response:', rawData);

    const data = JSON.parse(rawData); // Parse as JSON
    res.status(response.status).json(data);
  } catch (error) {
    console.error('Error fetching data:', error.message);
    console.error('Error stack trace:', error.stack);
    res.status(500).json({ error: `Failed to fetch data: ${error.message}` });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});
