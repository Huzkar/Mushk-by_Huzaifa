// api/cors-proxy.js

module.exports = async (req, res) => {
    const targetUrl = req.query.url; // Get the API URL from query parameter
  
    if (!targetUrl) {
      return res.status(400).json({ error: 'Missing URL query parameter' });
    }
  
    try {
      const response = await fetch(targetUrl);
      const data = await response.json();
  
      // Set CORS headers
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
      res.status(200).json(data); // Send back the API data
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch data' });
    }
  };
  