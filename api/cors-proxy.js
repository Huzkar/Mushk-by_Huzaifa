module.exports = async (req, res) => {
  const targetUrl = req.query.url; // Get the API URL from query parameter

  if (!targetUrl) {
    return res.status(400).json({ error: 'Missing URL query parameter' });
  }

  // Set CORS headers for all responses
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
      // Handle CORS preflight request
      res.status(200).end();
      return;
  }

  try {
    const response = await fetch(targetUrl);
    const data = await response.json();

    res.status(200).json(data); // Send back the API data
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
};
